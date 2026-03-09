import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import type { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import type {
	ComputerResponse,
	CreateComputerDto,
	UpdateComputerDto,
} from "../models/computer.model";

@Injectable({
	providedIn: "root",
})
export class ComputerService {
	private readonly http = inject(HttpClient);
	private readonly computersUrl = `${environment.apiUrl}/computers`;

	getAll(): Observable<ComputerResponse[]> {
		return this.http.get<ComputerResponse[]>(this.computersUrl);
	}

	getById(id: number): Observable<ComputerResponse> {
		return this.http.get<ComputerResponse>(`${this.computersUrl}/${id}`);
	}

	create(data: CreateComputerDto): Observable<ComputerResponse> {
		return this.http.post<ComputerResponse>(this.computersUrl, data);
	}

	update(id: number, data: UpdateComputerDto): Observable<ComputerResponse> {
		return this.http.put<ComputerResponse>(`${this.computersUrl}/${id}`, data);
	}

	delete(id: number): Observable<void> {
		return this.http.delete<void>(`${this.computersUrl}/${id}`);
	}
}
