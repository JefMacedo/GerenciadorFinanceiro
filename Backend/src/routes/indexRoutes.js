const { userRoutes } = require("./userRoutes");
const { authRoutes } = require("./authRoutes");
const { salesRoutes } = require("./salesRoutes");

module.exports = (app) => {
    userRoutes(app);
    authRoutes(app);
    salesRoutes(app);
};