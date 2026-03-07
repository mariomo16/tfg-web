import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { catchError, EMPTY, type Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import type { ZoneResponse } from "../models/zone.model";

@Injectable({
	providedIn: "root",
})
export class ZoneService {
	private readonly http = inject(HttpClient);
	private readonly zonesUrl = `${environment.apiUrl}/zones`;

	getAll(): Observable<ZoneResponse[]> {
		return this.http.get<ZoneResponse[]>(this.zonesUrl).pipe(
			catchError((error) => {
				console.error("Couldn't get zones data:", error);
				return EMPTY;
			}),
		);
	}
}
