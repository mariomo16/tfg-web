import type { Zone } from "../../features/zones/zone.model";

export type ComputerStatus = "available" | "maintenance" | "occupied";
export type ComputerStatusLabel = "Disponible" | "En mantenimiento" | "Ocupado";

export interface ComputerResponse {
	id: number;
	name: string;
	specs: string;
	status: ComputerStatus;
	zone: Zone | null;
	zone_id: number;
	reservations: unknown[];
}

export interface Computer
	extends Omit<ComputerResponse, "status" | "reservations" | "zone_id"> {
	status: ComputerStatusLabel;
	statusAccent: string;
}

export interface CreateComputerDto {
	name: string;
	zone_id: number;
	specs: string;
}

export interface UpdateComputerDto {
	name?: string;
	zone_id?: number;
	status?: ComputerStatus;
	specs?: string;
}
