import { Router } from "express";
import { ApiRoutesEnum } from "../enums/api-routes.enum";
import { CandidateController } from "../controllers/candidateController";
import { CandidateService } from "../services/candidateService";
import { CandidateDal } from "../dals/candidateDal";

export class CandidateRouter {

	router: Router = Router();
	private candidateDal: CandidateDal = new CandidateDal()
	private candidateService: CandidateService = new CandidateService(this.candidateDal);
	private candidateController: CandidateController = new CandidateController(
		this.candidateService
	);

	constructor() {
		this.router.get(ApiRoutesEnum.GetAllCandidates, this.candidateController.getAllCandidates);
	}

}
