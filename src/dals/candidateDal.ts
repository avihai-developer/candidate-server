import { ICandidate } from "../interfaces/candidate.interface";
import { CANDIDATES } from "../consts/candidates.const";

export class CandidateDal {

	candidates: ICandidate[] = CANDIDATES;

	async getCandidates(): Promise<ICandidate[]> {
		return this.candidates;
	}

}
