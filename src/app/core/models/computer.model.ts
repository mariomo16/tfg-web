import type { Zone } from "./zone.model";

export interface ComputerResponse {
	id: number;
	name: string;
	reservations: [];
	specs: string;
	status: string;
	zones: Zone[];
	zone_id: number;
}

export interface Computer {
	id: number;
	zones: Zone[];
	name: string;
	status: string;
	specs: string;
}
