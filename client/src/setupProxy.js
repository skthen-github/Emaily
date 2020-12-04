// this proxy will only work on development server under create-react-app server
// in production, the create-react-app server falls away, so this proxy below will
// not exist in production environment
// this proxy takes the request from the browser
// e.g. http://localhost:3000/auth/google together with the cookies (user Id)
// and change the domain to those specified like below and send it to the server
// e.g. http://localhost:5000/auth/google and this overcomes the issue of
// cookies not being included (security feature)
// and CORS (Cross Origin Resource Sharing) issue because
// http://localhost:3000 is not http://localhost:5000
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
