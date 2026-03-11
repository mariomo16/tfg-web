import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import type { Observable } from "rxjs";
import { API_URL } from "../../core/tokens/api-url.token";
import type { HealthResponse } from "./health.model";

@Injectable({
	providedIn: "root",
})
export class HealthService {
	readonly #http = inject(HttpClient);
	readonly #healthUrl = `${inject(API_URL)}/status`;

	checkStatus(): Observable<HealthResponse> {
		return this.#http.get<HealthResponse>(this.#healthUrl);
	}
}
