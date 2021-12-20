
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["localhost"], {
      target: 'http://localhost:5000',
      changeOrigin: true,
      secure: false,
    })
  );
};
