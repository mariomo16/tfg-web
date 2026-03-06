import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import type { ServerStatusResponse } from "../models/status.interface";

@Injectable({
	providedIn: "root",
})
export class ApiService {
  private http: HttpClient = inject(HttpClient);

	getServerStatus() {
		return this.http.get<ServerStatusResponse>(`${environment.apiUrl}/status`);
	}
}
