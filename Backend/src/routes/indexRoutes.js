const { userRoutes } = require("./userRoutes");
const { authRoutes } = require("./authRoutes");

module.exports = (app) => {
    userRoutes(app);
    authRoutes(app);
};