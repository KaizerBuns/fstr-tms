import config from "./config.json";
import jsonServer from "json-server";
import jsonData from "./db.js";
import Moment from "moment";

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const dataObj = Object.assign(jsonData, {});
const router = jsonServer.router(dataObj);

server.use(middlewares);
server.use(jsonServer.bodyParser);

const rewriter = jsonServer.rewriter({
  "/api/Trip/list": "/api/trips",
  "/api/Trip/create": "/api/trips",
  "/api/Trip/:tripId/get": "/api/trips?id=:tripId",
});
server.use(rewriter);
server.post("/api/User/login", (req, res) => {
  if (
    req.body["email"] === "cesar@fstr.com" &&
    req.body["password"] === "letmein123"
  ) {
    return res.status(200).json({
      jwt: jsonData.users[0].jwt,
      role: jsonData.users[0].role,
    });
  } else if (
    req.body["email"] === "mradul@fstr.com" &&
    req.body["password"] === "letmein123"
  ) {
    return res.status(200).json({
      jwt: jsonData.users[1].jwt,
      role: jsonData.users[1].role,
    });
  } else if (
    req.body["email"] === "bill@fstr.com" &&
    req.body["password"] === "letmein123"
  ) {
    return res.status(200).json({
      jwt: jsonData.users[2].jwt,
      role: jsonData.users[2].role,
    });
  } else {
    return res.status(200).json({
      jwt: "",
      role: "",
    });
  }
});

// Use default router
server.use("/api", router);
server.listen(process.env.PORT || config.port, () => {
  console.log(`JSON Server is running on ${process.env.PORT || config.port}`);
});

export default server;
