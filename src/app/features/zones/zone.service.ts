import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { map, type Observable } from "rxjs";
import { API_URL } from "../../core/tokens/api-url.token";
import { ZONE_ACCENTS, ZONE_ICONS } from "./zone.constants";
import type {
	CreateZoneDto,
	UpdateZoneDto,
	Zone,
	ZoneResponse,
} from "./zone.model";

@Injectable({
	providedIn: "root",
})
export class ZoneService {
	readonly #http = inject(HttpClient);
	readonly #baseUrl = `${inject(API_URL)}/zones`;
	readonly #adminUrl = `${inject(API_URL)}/admin/zones`;

	getAll(): Observable<Zone[]> {
		return this.#http
			.get<ZoneResponse[]>(this.#baseUrl)
			.pipe(map((zones) => zones.map((zone) => this.#mapToZone(zone))));
	}

	getById(id: number): Observable<Zone> {
		return this.#http
			.get<ZoneResponse>(`${this.#baseUrl}/${id}`)
			.pipe(map((zone) => this.#mapToZone(zone)));
	}

	create(data: CreateZoneDto): Observable<Zone> {
		return this.#http
			.post<ZoneResponse>(this.#adminUrl, data)
			.pipe(map((zone) => this.#mapToZone(zone)));
	}

	update(id: number, data: UpdateZoneDto): Observable<Zone> {
		return this.#http
			.put<ZoneResponse>(`${this.#adminUrl}/${id}`, data)
			.pipe(map((zone) => this.#mapToZone(zone)));
	}

	delete(id: number): Observable<void> {
		return this.#http.delete<void>(`${this.#adminUrl}/${id}`);
	}

	#mapToZone(response: ZoneResponse): Zone {
		const available = response.computers.filter(
			(computer) => computer.status === "available",
		).length;

		return {
			id: response.id,
			name: response.name,
			pricePerSlot: response.price_per_slot,
			computers: response.computers,
			totalComputers: response.computers.length,
			availableComputers: available,
			icon: ZONE_ICONS[response.name],
			accent: ZONE_ACCENTS[response.name],
		};
	}
}
