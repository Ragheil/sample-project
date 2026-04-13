import { useEffect, useMemo, useRef, useState } from "react";
import { FaqItem } from "../data/phonipinoData";
import { DEFAULT_BOT_GREETING, findFaqReply } from "../utils/faqChatbot";

type FloatingFaqChatbotProps = {
  faqs: FaqItem[];
};

type ChatMessage = {
  role: "user" | "bot";
  text: string;
};

export default function FloatingFaqChatbot({ faqs }: FloatingFaqChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [faqPanelOpen, setFaqPanelOpen] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: DEFAULT_BOT_GREETING,
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const suggestedQuestions = useMemo(
    () => faqs.map((faq) => faq.q),
    [faqs]
  );

  useEffect(() => {
    if (!isOpen) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [isOpen, messages]);

  const sendMessage = (text: string) => {
    const clean = text.trim();
    if (!clean) return;

    const reply = findFaqReply(clean, faqs);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: clean },
      { role: "bot", text: reply },
    ]);

    setInput("");
    setIsOpen(true);
    setFaqPanelOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={`floating-chat-trigger ${isOpen ? "hidden-trigger" : ""}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <span className="floating-chat-dot" />
        <span>Message us</span>
      </button>

      {isOpen && (
        <section className="floating-chat-window" aria-label="Phonipino FAQ Bot">
          <div className="floating-chat-header">
            <div className="floating-chat-profile">
              <img
                src="/logo.jpg"
                alt="Phonipino Corp."
                className="floating-chat-avatar"
              />
              <div>
                <div className="floating-chat-title">Phonipino FAQ Bot</div>
                <div className="floating-chat-subtitle">Typically replies instantly</div>
              </div>
            </div>

            <button
              type="button"
              className="floating-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="floating-chat-messages" aria-live="polite">
            <div className="floating-chat-day-label">Today</div>

            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`floating-chat-row ${message.role}`}>
                {message.role === "bot" ? (
                  <div className="floating-chat-avatar-mini" aria-hidden="true">
                    P
                  </div>
                ) : null}

                <div className="floating-chat-bubble-wrap">
                  {message.role === "bot" && index === 0 ? (
                    <div className="floating-chat-name">Phonipino FAQ Bot</div>
                  ) : null}
                  <div className={`floating-chat-bubble ${message.role}`}>{message.text}</div>
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          <div className="floating-chat-composer">
            <div className="floating-chat-helper">
              Ask about services, hiring, office location, registration, or 24/7 support.
            </div>

            <button
              type="button"
              className={`floating-chat-panel-toggle ${faqPanelOpen ? "is-open" : ""}`}
              onClick={() => setFaqPanelOpen((prev) => !prev)}
              aria-expanded={faqPanelOpen}
              aria-controls="floating-chat-faq-list"
            >
              <span className="floating-chat-panel-copy">
                <span className="floating-chat-suggestions-title">Frequently asked questions</span>
                <span className="floating-chat-panel-meta">{faqs.length} questions</span>
              </span>
              <span className="floating-chat-panel-icon" aria-hidden="true">
                {faqPanelOpen ? "x" : "+"}
              </span>
            </button>

            {faqPanelOpen && (
              <div
                id="floating-chat-faq-list"
                className="floating-chat-suggestions"
                aria-label="Suggested questions"
              >
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    className="floating-chat-chip"
                    onClick={() => sendMessage(question)}
                  >
                    {question}
                  </button> 
                ))}
              </div>
            )}

            <div className="floating-chat-input-row">
              <input
                className="floating-chat-input"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage(input);
                }}
              />
              <button 
                type="button"
                className="floating-chat-send"
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
              >
                Send
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
