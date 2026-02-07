import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the Gemini AI client
// Using a safe fallback if env is missing to prevent crash on render, though funcionality will fail gracefully
const ai = new GoogleGenAI({ apiKey: apiKey });

export const generateClubResponse = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "API Key mancante. Contatta l'amministratore del sistema.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `
          Sei l'assistente virtuale dello 'Juventus Official Fan Club Enna'.
          Parla italiano. Sii educato, entusiasta e usa un tono da vero tifoso ("Fino alla Fine").
          Il tuo compito è fornire informazioni sul club di Enna, sulla storia della Juventus, o sui giocatori.
          
          Informazioni Club Enna:
          - Sede: Via Roma 117/119, Enna.
          - Presidente: Mario Rossi.
          - Email: jcdenna@gmail.com.
          - Siamo attivi dal 2005.
          - Organizziamo pullman per tutte le partite in casa.
          
          Se ti chiedono biglietti, rispondi che possono essere richiesti solo dai soci attivi tramite il portale o in sede.
        `,
        temperature: 0.7,
      }
    });

    return response.text || "Mi dispiace, non ho capito. Forza Juve!";
  } catch (error) {
    console.error("Errore Gemini:", error);
    return "Si è verificato un errore momentaneo. Riprova più tardi. #FinoAllaFine";
  }
};