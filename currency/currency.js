// server.js  (Node 18+, run: npm i express)
const express = require("express");
const app = express();
/// Neet to test the API, you can use the following curl command:
let cache = { rate: null, fetchedAt: 0 };
const TTL_MS = 60 * 60 * 1000; // 1 hour

app.get("/api/exchange-rate/php-usd", async (req, res) => {
  try {
    if (!cache.rate || Date.now() - cache.fetchedAt > TTL_MS) {
      const r = await fetch("https://open.er-api.com/v6/latest/PHP");
      const data = await r.json();
      if (data.result !== "success") throw new Error("Provider error");
      cache = { rate: data.rates.USD, fetchedAt: Date.now() };
    }

    const amount = parseFloat(req.query.amount);
    res.json({
      from: "PHP",
      to: "USD",
      rate: cache.rate,
      updatedAt: new Date(cache.fetchedAt).toISOString(),
      ...(isNaN(amount) ? {} : { amount, converted: +(amount * cache.rate).toFixed(2) }),
    });
  } catch (err) {
    res.status(502).json({ error: "Could not fetch exchange rate" });
  }
});

app.listen(3000, () => console.log("Listening on :3000"));