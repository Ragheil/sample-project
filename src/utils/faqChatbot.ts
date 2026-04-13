export type FaqChatItem = {
  q: string;
  a: string;
  keywords?: string[];
};

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "can",
  "do",
  "for",
  "how",
  "i",
  "in",
  "is",
  "my",
  "of",
  "on",
  "or",
  "the",
  "to",
  "what",
  "where",
  "who",
  "with",
  "you",
  "your",
]);

export const DEFAULT_BOT_GREETING =
  "Hi! I am the Phonipino FAQ Bot. Ask me about services, careers, office location, company registration, or 24/7 support.";

export const DEFAULT_FALLBACK_REPLY =
  "I can help with services, 24/7 support, office location, company registration, careers, and contact details. Try asking about hiring, scaling a team, or how to reach Phonipino Corp.";

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string) {
  return normalizeText(text)
    .split(" ")
    .filter((term) => term.length > 1 && !STOP_WORDS.has(term));
}

function buildFaqFields(faq: FaqChatItem) {
  return [
    normalizeText(faq.q),
    normalizeText(faq.a),
    ...(faq.keywords ?? []).map((keyword) => normalizeText(keyword)),
  ];
}

export function findFaqReply(input: string, faqs: FaqChatItem[]) {
  const normalizedInput = normalizeText(input);

  if (!normalizedInput) return DEFAULT_FALLBACK_REPLY;

  if (/\b(thanks|thank you|salamat)\b/.test(normalizedInput)) {
    return "You are welcome. If you need anything else, ask me about services, hiring, office location, or support coverage.";
  }

  if (/\b(hi|hello|hey)\b/.test(normalizedInput) && normalizedInput.split(" ").length <= 4) {
    return DEFAULT_BOT_GREETING;
  }

  const searchTerms = Array.from(new Set(tokenize(input)));
  let bestMatch: FaqChatItem | undefined;
  let bestScore = 0;

  for (const faq of faqs) {
    const fields = buildFaqFields(faq);
    let score = 0;

    if (fields.some((field) => field.includes(normalizedInput))) {
      score += 10;
    }

    for (const term of searchTerms) {
      if (fields.some((field) => field.includes(term))) {
        score += term.length >= 5 ? 2 : 1;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  return bestScore >= 3 && bestMatch ? bestMatch.a : DEFAULT_FALLBACK_REPLY;
}
