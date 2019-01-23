import * as express from "express";
import * as bodyParser from "body-parser";
import { errorHandler, notFoundRoute } from "./libs/routes/index";
class Server {
	public app: express.Express;
	constructor(private config) {
		this.app = express();
	}
	public bootstrap() {
		this.initBodyParser();
		this.setupRoutes();
		return this;
	}
	public setupRoutes() {
		this.app.use("/health-check", (req, res) => {
			res.send("I am OK");
		});
		this.app.use(notFoundRoute);
		this.app.use(errorHandler);
	}
	private initBodyParser() {
		const { app } = this;
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: false }));
	}
	public run() {
		const {
			app,
			config: { port }
		} = this;
		app.listen(port, err => {
			if (err) {
				throw err;
			}
			console.log("app is running on ", port);
		});
	}
}
export { Server };
