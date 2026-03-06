import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { catchError, type Observable, of } from "rxjs";
import { environment } from "../../../environments/environment";
import type { HealthCheckResult } from "../models/health.model";

@Injectable({
	providedIn: "root",
})
export class HealthService {
	private readonly http = inject(HttpClient);
	private readonly healthUrl = `${environment.api.apiUrl}/up`;

	checkStatus(): Observable<HealthCheckResult> {
		return this.http.get<HealthCheckResult>(this.healthUrl).pipe(
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
