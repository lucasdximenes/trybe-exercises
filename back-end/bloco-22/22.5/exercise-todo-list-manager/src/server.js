require("dotenv").config();
const app = require("./app");

const { APP_PORT } = process.env;

app.listen(APP_PORT, async () => {
  console.log(`Tasks Manager API está sendo executada na porta ${APP_PORT}`);
});
