import express = require('express');
import { ApiRoutesEnum } from "./enums/api-routes.enum";
import { CandidateRouter } from "./routers/candidate.router";
var cors = require('cors')

export class App {

	express: express.Application;

	async init(): Promise<void> {
		this.createExpressServer();
		this.setRouters();
	}

	private createExpressServer(): void {
		this.express = express();
		this.express.use(cors());
	}

	private setRouters(): void {
		this.express.use(ApiRoutesEnum.Candidate, new CandidateRouter().router);
	}

}
