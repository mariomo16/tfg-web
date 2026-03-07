import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { catchError, type Observable, of } from "rxjs";
import { environment } from "../../../environments/environment";
import type { HealthResponse } from "../models/health.model";

@Injectable({
	providedIn: "root",
})
export class HealthService {
	private readonly http = inject(HttpClient);
	private readonly healthUrl = `${environment.apiUrl}/status`;

	checkStatus(): Observable<HealthResponse> {
		return this.http.get<HealthResponse>(this.healthUrl).pipe(
			catchError((error) => {
				console.error("Health check failed:", error);
				return of({
					status: "down" as const,
					time: 0,
				});
			}),
		);
	}
}
