import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { catchError, EMPTY, type Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import type { ComputerResponse } from "../models/computer.model";

@Injectable({
	providedIn: "root",
})
export class ComputerService {
	private readonly http = inject(HttpClient);
	private readonly computersUrl = `${environment.apiUrl}/computers`;

	getAll(): Observable<ComputerResponse[]> {
		return this.http.get<ComputerResponse[]>(this.computersUrl).pipe(
			catchError((error) => {
				console.error("Couldn't get computers data:", error);
				return EMPTY;
			}),
		);
	}
}
