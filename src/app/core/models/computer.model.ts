import type { Zone } from "./zone.model";

export interface ComputerResponse {
	id: number;
	name: string;
	reservations: [];
	specs: string;
	status: string;
	zone: Zone[];
	zone_id: number;
}
