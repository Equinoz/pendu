const express = require("express");
const app = express();

const PORT = Number(process.argv[2]) || 7070,
      path = __dirname + '/dist/';

app.use(express.static(path))
  .use(function (req,res) {
    res.sendFile(path + "index.html");
  });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
