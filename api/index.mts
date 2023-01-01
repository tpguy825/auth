import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(String(process.env.PORT), 10) || 3000;

const nextapp = next({ dev });
const handle = nextapp.getRequestHandler();

await nextapp.prepare();

const app = express();

// server.get('/a', (req, res) => {
//   return app.render(req, res, '/b', req.query)
// })

app.get("*", (req, res) => {
	return handle(req, res);
});

app.listen(port, () => {
	console.log(`\x1B[32mready\x1B[0m - ready on http://localhost:${port}`);
});

export default app