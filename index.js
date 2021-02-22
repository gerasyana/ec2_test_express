const express = require("express");
const ip = require("ip");
const app = express();
const port = process.env.NODE_PORT || 3000;

app.get("/", (req, res) => {
  res.end(`<html><body><h3>Server is up</h3><p>IP address: ${ip.address()}</p></body></html>`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});