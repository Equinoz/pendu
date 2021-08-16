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

// const http = require('http')
// const fs = require('fs')
// const httpPort = 8080

// http.createServer((req, res) => {
//   fs.readFile(__dirname + "/dist/index.html", 'utf-8', (err, content) => {
//     if (err) {
//       console.log('We cannot open "index.html" file.')
//     }

//     res.writeHead(200, {
//       'Content-Type': 'text/html; charset=utf-8'
//     })

        // Doit servir les fichier statiques

//     res.end(content)
//   })
// }).listen(httpPort, () => {
//   console.log('Server listening on: http://localhost:%s', httpPort)
// })