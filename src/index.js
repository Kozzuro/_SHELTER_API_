const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const jwksRsa = require("jwks-rsa");
const { expressjwt: jwt } = require('express-jwt');
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const v1DogRouter = require("./v1/routes/dogRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-7fcf3-i9.us.auth0.com/.well-known/jwks.json`,
  }),

  audience: "https://dev-7fcf3-i9.us.auth0.com/api/v2/",
  issuer: `https://dev-7fcf3-i9.us.auth0.com/`,
  algorithms: ["RS256"],
});

// app.use(checkJwt);
app.use(bodyParser.json());
app.use("/api/v1/dogs", checkJwt, v1DogRouter);

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send({ status: 401, message: "Unauthorized!" });
  }
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
