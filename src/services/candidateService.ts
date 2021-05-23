import { CandidateDal } from "../dals/candidateDal";
import { ICandidate } from "../interfaces/candidate.interface";
import { IFormattedCandidate } from "../interfaces/formatted-candidate.interface";

export class CandidateService {

	constructor(private candidateDal: CandidateDal) {
	}

	async getCandidates(): Promise<ICandidate[]> {
		return this.candidateDal.getCandidates();
	}

	async getFormattedCandidate(): Promise<IFormattedCandidate[]> {
		return (await this.getCandidates()).map((item) => {
				return {
					name: item.contact_info.name.formatted_name,
					works: item.experience.map(item => {
						return {
							title: item.company_normalized_name,
							startDate: item.start_date,
							endDate: item.end_date
						}
					})
				}
			}
		)
	}

}
