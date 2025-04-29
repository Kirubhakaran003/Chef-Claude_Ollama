import { Ollama } from "ollama";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

const ollama = new Ollama({ host: "http://localhost:11434" });

export async function getRecipeFromLlama3(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    
    try {
      // Verify Ollama is responsive first
      await fetch("http://localhost:11434/api/tags");
      
      const response = await ollama.generate({
        model: "llama3",
        prompt: `${SYSTEM_PROMPT}\n\nUser: I have ${ingredientsString}. Suggest a recipe.`,
        options: { temperature: 0.7 }
      });
  
      if (!response?.response) throw new Error("Empty response from Ollama");
      return response.response;
      
    } catch (err) {
      console.error("Ollama Error:", err);
      // Provide a fallback recipe
      return `## Quick Recipe Idea\n\nWith ${ingredientsString}, try:\n1. **Pasta Bolognese**\n   - Brown ground beef\n   - Add tomato paste and spices\n   - Mix with cooked pasta\n\n*Error: ${err.message}*`;
    }
  }