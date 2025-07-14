export const requestRefillDecision = async (
  sku: string,
  stock: number,
  forecast: number[]
): Promise<string> => {
  try {
    const res = await fetch("/api/inventory/refill", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sku, stock, forecast }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || "Unknown error");
    return data.suggestion || "No suggestion received.";
  } catch (error) {
    console.error("AI request failed:", error);
    return "❌ Error getting AI suggestion.";
  }
};
