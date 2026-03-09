import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import type { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import type {
	CreateZoneDto,
	UpdateZoneDto,
	ZoneResponse,
} from "../models/zone.model";

@Injectable({
	providedIn: "root",
})
export class ZoneService {
	private readonly http = inject(HttpClient);
	private readonly zonesUrl = `${environment.apiUrl}/zones`;

	getAll(): Observable<ZoneResponse[]> {
		return this.http.get<ZoneResponse[]>(this.zonesUrl);
	}

	getById(id: number): Observable<ZoneResponse> {
		return this.http.get<ZoneResponse>(`${this.zonesUrl}/${id}`);
	}

	create(data: CreateZoneDto): Observable<ZoneResponse> {
		return this.http.post<ZoneResponse>(this.zonesUrl, data);
	}

	update(id: number, data: UpdateZoneDto): Observable<ZoneResponse> {
		return this.http.put<ZoneResponse>(`${this.zonesUrl}/${id}`, data);
	}

	delete(id: number): Observable<void> {
		return this.http.delete<void>(`${this.zonesUrl}/${id}`);
	}
}
