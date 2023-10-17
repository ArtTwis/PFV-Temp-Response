const Response  = require("./PFV_Response_Object_Structure2");

const express = require("express");

const app = express();

const PORT = 8001;

app.get(`/product/comp-products/:productId`, (req, res) => {
  return res.status(200).send(Response);
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
