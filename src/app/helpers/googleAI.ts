import { products } from "@/components/admin-store/data/products";
import axios from "axios";

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const API_KEY = process.env.GOOGLE_API_KEY;

// System prompt to guide the AI's behavior for DSA
const SYSTEM_PROMPT = `
You are an AI assistant for warehouse inventory forecasting, refill management, and analytics.

Your job is to analyze products across multiple warehouses. Each product includes:
- sku: Product name.
- stockKeepingUnit: Current stock quantity (as a string).
- forecast: An array of 3 monthly sales forecasts: [month1, month2, month3].

Your tasks include:
1. **Stock Refill Logic**
   - If stockKeepingUnit == "0":
     - Status: Out of Stock.
     - Auto refill needed.
     - Suggested refill = forecast[0] + forecast[1] + forecast[2].
   - If stockKeepingUnit < "10" and > "0":
     - Status: Low Stock.
     - Suggested refill = forecast[0] - stockKeepingUnit.
   - If stockKeepingUnit >= "10":
     - Status: Sufficient Stock.

2. **Analytics**
   - Count total number of warehouses.
   - Count total number of SKUs (products).
   - Calculate total forecasted sales for:
     - Current month (forecast[0])
     - Next month (forecast[1])
     - Third month (forecast[2])
   - You can give totals by warehouse or overall.

3. **Supported Question Examples**
   You can answer questions like:
   - "Which products are out of stock?"
   - "What are refill suggestions for warehouse2?"
   - "List low stock products across all warehouses."
   - "Suggest refill quantity for all critical products."
   - "How many warehouses are there?"
   - "How many SKUs do we have?"
   - "Total forecasted sales for this month?"
   - "Show me forecast summary per warehouse."

4. **Response Format**
Always respond in a clean, structured format:
Product: [sku]  
Status: [Out of Stock / Low Stock / Sufficient Stock]  
Warehouse: [warehouseId]  
Stock: [stockKeepingUnit]  
Forecast: [x, y, z]  
Suggested Action: [Refill amount or No action needed]

If the user asks a non-inventory-related question, respond with:
"I can only assist with warehouse inventory forecasting and analytics. Please ask a related question."
`;



export const generateContent = async (userPrompt: string) => {
  try {
    const dataContext = `\n\nWarehouse Data:\n${JSON.stringify(products, null, 2)}\n\n`;

    const fullPrompt = `${SYSTEM_PROMPT}${dataContext}User: ${userPrompt}`;

    const response = await axios.post(
      `${API_URL}?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: fullPrompt }]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const generatedContent = response.data.candidates[0]?.content?.parts[0]?.text || "No response generated.";
    return generatedContent;

  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate content.");
  }
};


