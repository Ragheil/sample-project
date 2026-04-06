import { useMemo, useState } from "react";
import { FaqItem } from "../data/phonipinoData";

type FaqChatbotProps = {
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
      lowered.includes("24/7") && q.includes("24/7")
    ) || (
      lowered.includes("registered") && q.includes("registered")
    ) || (
      lowered.includes("apply") && q.includes("apply")
    ) || (
      lowered.includes("specialize") && q.includes("specialize")
    ) || (
      lowered.includes("scale") && q.includes("scale")
    ) || q.includes(lowered);
  });

  if (matched) return matched.a;

  return "I can answer questions about Phonipino Corp.’s services, 24/7 support, hiring, registration in the US and Philippines, and company overview.";
}

export default function FaqChatbot({ faqs }: FaqChatbotProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Hi! Ask me about Phonipino Corp., our services, hiring, support hours, or company registration.",
    },
  ]);

  const quickQuestions = useMemo(
    () => [
      "What does Phonipino Corp. specialize in?",
      "Do you offer 24/7 support?",
      "Where is the company registered?",
      "How can I apply for work?",
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
  };

  return (
    <div className="chatbot-card">
      <div className="chatbot-header">
        <div>
          <div className="chatbot-title">FAQ Assistant</div>
          <div className="chatbot-subtitle">
            Quick answers for visitors and applicants
          </div>
        </div>
        <div className="chatbot-badge">Online</div>
      </div>

      <div className="chatbot-quick-list">
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

      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`chat-message ${message.role === "user" ? "user" : "bot"}`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="chatbot-input-row">
        <input
          className="chatbot-input"
          placeholder="Ask something about Phonipino Corp..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage(input);
          }}
        />
        <button type="button" className="btn btn-primary" onClick={() => sendMessage(input)}>
          Send
        </button>
      </div>
    </div>
  );
}