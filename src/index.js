const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const jwksRsa = require("jwks-rsa");
const { expressjwt: jwt } = require('express-jwt');
const apicache = require("apicache");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const v1DogRouter = require("./v1/routes/dogRoutes");
const v1CatRouter = require("./v1/routes/catRoutes");
const v1AnimalRouter = require("./v1/routes/animalRoutes");

const cache = apicache.middleware;

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

app.use(cors());
// app.use(checkJwt);
app.use(cors({
  credentials: true,
  methods: 'POST,GET,PATCH,DELETE'
}));
app.use(bodyParser.json());
// app.use(cache('50 minutes'))
app.use("/api/v1/dogs", checkJwt, v1DogRouter);
app.use("/api/v1/cats", checkJwt, v1CatRouter);
app.use("/api/v1/animals", checkJwt, v1AnimalRouter);

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send({ status: 401, message: "Unauthorized!" });
  }
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
