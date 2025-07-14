import { generateContent } from "@/app/helpers/googleAI";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const { sku, stock, forecast } = await req.json();

    const userPrompt = `
The product ${sku} has current stock of ${stock}.
Forecast for next 3 months: [${forecast.join(", ")}].

Should we refill this product? If yes, how much?
    `;

    const result = await generateContent(userPrompt);

    return NextResponse.json({ suggestion: result });
  } catch (err) {
    console.error("Error in /api/inventory/refill:", err);
    return NextResponse.json({ error: "AI Suggestion failed" }, { status: 500 });
  }
}
