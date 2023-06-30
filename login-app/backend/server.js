const express = require("express");
const app = express();

app.use(express.urlencoded());

const users = [
  { email: "rob@dvd.com", password: "rob123" },
  { email: "john@dvd.com", password: "john123" },
];

app.post("/login", function (request, response) {
  console.log(request.body);
  for (let i = 0; i < users.length; i = i + 1) {
    if (
      users[i].email === request.body.email &&
      users[i].password === request.body.password
    ) {
      return response.redirect(
        "http://127.0.0.1:5500/login-app/frontend/loggedin.html"
      );
    }
  }
  response.status(401).send("Thats not right. Do it again.");
});

const port = 4000;
app
  .listen(port, () =>
    console.log(
      `Listening at port http://locahost:${port}/. 😊✌❤🤷‍♂️🤷‍♀️🤔😂😁😎🌹💋💋🤞😒😊✌ `
    )
  )
  .on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.error("Concubines");
    } else {
      console.error(error);
    }
  });
