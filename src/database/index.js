const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: "localhost",
        dialect: "mysql",
    }
);


sequelize.sync();

(async () => {
    try {
        await sequelize.authenticate();
        console.log("connection has been established successfully");
    } catch (error) {
        

    }
})();

module.exports = sequelize;