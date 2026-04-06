import { useMemo, useState } from "react";
import { FaqItem } from "../data/phonipinoData";

type FloatingFaqChatbotProps = {
  faqs: FaqItem[];
};

type ChatMessage = {
  role: "user" | "bot";
  text: string;
};

function findFaqReply(input: string, faqs: FaqItem[]): string {
  const lowered = input.toLowerCase().trim();

  const matched = faqs.find((faq) => {
    const q = faq.q.toLowerCase();
    return (
      q.includes(lowered) ||
      (lowered.includes("24/7") && q.includes("24/7")) ||
      (lowered.includes("registered") && q.includes("registered")) ||
      (lowered.includes("apply") && q.includes("apply")) ||
      (lowered.includes("career") && q.includes("apply")) ||
      (lowered.includes("specialize") && q.includes("specialize")) ||
      (lowered.includes("service") && q.includes("specialize")) ||
      (lowered.includes("philippines") && q.includes("registered")) ||
      (lowered.includes("us") && q.includes("registered"))
    );
  });

  if (matched) return matched.a;

  return "I can help with services, company registration in the US and Philippines, 24/7 support, and careers or application questions.";
}

export default function FloatingFaqChatbot({ faqs }: FloatingFaqChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Hi! Ask me about Phonipino Corp., our services, support hours, registration, or careers.",
    },
  ]);

  const quickQuestions = useMemo(
    () => [
      "What services do you offer?",
      "Are you registered in the US and Philippines?",
      "Do you offer 24/7 support?",
      "How do I apply?",
    ],
    []
  );

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
        <span>Chat with us</span>
      </button>

      {isOpen && (
        <div className="floating-chat-window">
          <div className="floating-chat-header">
            <div>
              <div className="floating-chat-title">Phonipino FAQ Bot</div>
              <div className="floating-chat-subtitle">Quick company answers</div>
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

          <div className="floating-chat-quick-list">
            {quickQuestions.map((question) => (
              <button
                key={question}
                type="button"
                className="quick-chip"
                onClick={() => sendMessage(question)}
              >
                {question}
              </button>
            ))}
          </div>

          <div className="floating-chat-messages">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`chat-message ${message.role === "user" ? "user" : "bot"}`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="floating-chat-input-row">
            <input
              className="floating-chat-input"
              placeholder="Ask about services, careers, registration..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage(input);
              }}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => sendMessage(input)}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}