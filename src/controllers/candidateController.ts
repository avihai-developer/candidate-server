import { NextFunction, Request, Response } from 'express-serve-static-core';
import { CandidateService } from "../services/candidateService";
import { ResponseStatusCodes } from "../enums/response-status-codes.enum";
import { IFormattedCandidate } from "../interfaces/formatted-candidate.interface";

export class CandidateController {

	constructor(
		private candidateService: CandidateService
	) {
	}

	getAllCandidates = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const candidates: IFormattedCandidate[] = await this.candidateService.getFormattedCandidate();
			res.status(ResponseStatusCodes.Ok);
			res.send(candidates);
			next();
		} catch (e) {
			res.status(ResponseStatusCodes.BadRequest);
			res.send(e.message);
			next(e);
		}
	}

}
