import { appendFile } from "node:fs/promises";
import crypto from "node:crypto";

export const writeTransactionLog = async (
  purchaseAmount,
  ozPurchased,
  currentGoldPrice,
) => {
  const transaction = {
    date: new Date().toISOString(),
    UUID: crypto.randomUUID(),
    purchaseAmount,
    ozPurchased,
    currentGoldPrice,
  };

  try {
    await appendFile(
      "./logs/transactions.jsonl",
      JSON.stringify(transaction) + "\n",
    );
  } catch (err) {
    throw new Error(`Issue writing file: ${err}`);
  }
};
