import priceUpdate from "../handlers/priceUpdate.js";

export const goldPrice = async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const onPrice = (price) => {
    res.write(`data: ${JSON.stringify({ price: price })}\n\n`);
  };

  priceUpdate.on("priceUpdate", onPrice);

  req.on("close", () => {
    priceUpdate.off("priceUpdate", onPrice);
  });
};

export default goldPrice;
