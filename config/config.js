require("dotenv").config({path : "dev.env"})
module.exports =
    {
        development: {
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: "expression",
            host: "127.0.0.1",
            dialect: "postgres"
        },
        test: {
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: "expression",
            host: "127.0.0.1",
            dialect: "postgres"
        },
        production: {
            use_env_variable: 'DATABASE_URL',
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
                ssl: { // https://github.com/sequelize/sequelize/issues/12083
                    require: true,
                    rejectUnauthorized: false,
                },
            },
        },
    }
