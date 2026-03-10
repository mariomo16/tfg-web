import type { Zone } from "./zone.model";

export interface ComputerResponse {
	id: number;
	name: string;
	reservations: [];
	specs: string;
	status: "available" | "maintenance" | "occupied";
	zone: Zone;
	zone_id: number;
}

export interface Computer {
	id: ComputerResponse["id"];
	zone: ComputerResponse["zone"];
	name: ComputerResponse["name"];
	status: ComputerResponse["status"];
	specs: ComputerResponse["specs"];
	statusAccent: string;
}

export interface CreateComputerDto {
	name: ComputerResponse["name"];
	zone_id: ComputerResponse["zone_id"];
	specs: ComputerResponse["specs"];
}

export interface UpdateComputerDto {
	name?: ComputerResponse["name"];
	zone_id?: ComputerResponse["zone_id"];
	status?: ComputerResponse["status"];
	specs?: ComputerResponse["specs"];
}
