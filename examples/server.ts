import Koa from "koa";
import serve from "koa-static";

const app = new Koa();

app.use(serve("examples"));
app.use(serve("src"));

app.listen(8080, () => console.log("Listening at http://localhost:8080"));
