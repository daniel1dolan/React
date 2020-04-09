let express = require("express");
let app = express();

app.get("/api", (req, res) => {
  res.json([
    { id: 1, username: "Daniel" },
    { id: 2, username: "Matt" }
  ]);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
