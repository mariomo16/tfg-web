import type { ComputerResponse } from "./computer.model";

export interface ZoneResponse {
	computers: ComputerResponse[];
	id: number;
	name: "Zona Gaming" | "Zona Torneo" | "Zona VIP";
	price_per_slot: number;
}

export interface Zone {
	id: ZoneResponse["id"];
	name: ZoneResponse["name"];
	pricePerSlot: ZoneResponse["price_per_slot"];
	availableComputers: number;
	totalComputers: number;
	icon: string;
	accent: string;
}
