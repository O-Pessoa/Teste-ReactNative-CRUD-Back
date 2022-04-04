module.exports = {
  dialect: "mysql",
  host: process.env.HOST_DB,
  username: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: process.env.DB,
  define: {
    timestamps: true,
  },
  logging: (log) => {
    console.log(log);
  },
};
