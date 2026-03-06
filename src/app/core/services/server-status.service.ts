import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import type { ServerStatusResponse } from "../models/server-status.model";

@Injectable({
	providedIn: "root",
})
export class ServerStatusService {
  private http: HttpClient = inject(HttpClient);

	getServerStatus() {
		return this.http.get<ServerStatusResponse>(`${environment.apiUrl}/status`);
	}
}
