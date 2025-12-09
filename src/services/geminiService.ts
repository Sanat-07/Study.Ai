export const chatWithAI = async (message: string, _context: string): Promise<string> => {
    // In a real app, this would call the Google Gemini API
    // For this demo, we'll simulate a response

    return new Promise((resolve) => {
        setTimeout(() => {
            if (message.toLowerCase().includes('tabula rasa')) {
                resolve("Great question! 'Tabula Rasa' is a Latin phrase often translated as 'blank slate' in English. It refers to the epistemological idea that individuals are born without built-in mental content and that therefore all knowledge comes from experience or perception. Proponents include John Locke.");
            } else if (message.toLowerCase().includes('reflex')) {
                resolve("A reflex is an involuntary and nearly instantaneous movement in response to a stimulus. A reflex is made possible by neural pathways called reflex arcs which can act on an impulse before that impulse reaches the brain.");
            } else if (message.toLowerCase().includes('summary')) {
                resolve("Based on your notes, the text discusses the 'Psychology of Learning', specifically contrasting the 'Tabula Rasa' (Blank Slate) theory with the concept of 'Unlearned Behaviors' like reflexes and instincts. It explains that while some believe the mind is a blank slate at birth, biological evidence suggests we are born with certain innate behaviors.");
            } else {
                resolve("That's an interesting point! Based on the context of your notes on Psychology and Learning, could you elaborate more on how that connects to the concept of Conditioning?");
            }
        }, 1500);
    });
};
