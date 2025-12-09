import { GoogleGenAI, Type } from "@google/genai";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export interface FlashcardData {
    question: string;
    answer: string;
    topic?: string;
}

export const generateFlashcard = async (topic: string): Promise<FlashcardData> => {
    if (!apiKey) {
        // Fallback for demo purposes if no API key is present
        console.warn("No VITE_GOOGLE_API_KEY found. Using demo mode.");
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    question: `What is the core concept of ${topic}?`,
                    answer: `The core concept of ${topic} involves the fundamental principles and mechanisms that define its structure and function within its respective field. (Demo Mode: Add API Key for real AI answers)`,
                    topic: topic
                });
            }, 1000);
        });
    }

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-exp",
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `Generate a high-quality study flashcard about: "${topic}".
              1. The 'question' should be specific and test understanding of a key concept.
              2. The 'answer' must be accurate, factual, and concise (under 40 words).
              Return JSON.`
                        }
                    ]
                }
            ],
            config: {
                systemInstruction: "You are an expert university tutor. Your goal is to help students learn efficiently by creating clear, accurate flashcards.",
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        question: { type: Type.STRING },
                        answer: { type: Type.STRING },
                    },
                    required: ["question", "answer"],
                },
            },
        });

        const data = JSON.parse(response.text || '{}');
        return {
            question: data.question || `Could not generate question for ${topic}`,
            answer: data.answer || "Please try again.",
            topic: topic
        };
    } catch (error) {
        console.error("Gemini API Error:", error);
        // Fallback on error
        return {
            question: `What is ${topic}?`,
            answer: "Failed to generate content. Please check your API key and connection.",
            topic
        };
    }
};
