//1 require express
const express = require("express");
//3 require dotenv
require("dotenv").config();
// optionnel/require fs
const fs = require("fs");
//2 instance of express
const app = express();

// 7 middlewaers
app.use(express.static("PUBLIC"))   
app.require("./middleware/verify.js")
//6 routes
app.get("/", (req, res) => {
  fs.readFile("./public/pages/home.html" , (err, data) => {
      err ? console.log(err) : res.end(data);
    }
  );
});
app.get("/services", (req, res) => {
  fs.readFile("./public/pages/services.html" , (err, data) => {
      err ? console.log(err) : res.end(data);
    }
  );
});
app.get("/contact", (req, res) => {
  fs.readFile("./public/pages/contact.html" , (err, data) => {
      err ? console.log(err) : res.end(data);
    }
  );
});
// app.get("/", (req, res) => {
//   fs.readFile("./public/pages/error.html" , (err, data) => {
//       err ? console.log(err) : res.end(data);
//     }
//   );
// });

//4 PORT
const PORT = process.env.PORT || 4500;

//5 serveur
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`The serveur is running on http://localhost:${PORT}`);
});
