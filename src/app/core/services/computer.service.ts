import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import type { Observable } from "rxjs";
import type {
	ComputerResponse,
	CreateComputerDto,
	UpdateComputerDto,
} from "../models/computer.model";
import { API_URL } from "../tokens/api-url.token";

@Injectable({
	providedIn: "root",
})
export class ComputerService {
	readonly #http = inject(HttpClient);
	readonly #baseUrl = `${inject(API_URL)}/computers`;
	readonly #adminUrl = `${inject(API_URL)}/admin/computers`;

	getAll(): Observable<ComputerResponse[]> {
		return this.#http.get<ComputerResponse[]>(this.#baseUrl);
	}

	getById(id: number): Observable<ComputerResponse> {
		return this.#http.get<ComputerResponse>(`${this.#baseUrl}/${id}`);
	}

	create(data: CreateComputerDto): Observable<ComputerResponse> {
		return this.#http.post<ComputerResponse>(this.#adminUrl, data);
	}

	update(id: number, data: UpdateComputerDto): Observable<ComputerResponse> {
		return this.#http.put<ComputerResponse>(`${this.#adminUrl}/${id}`, data);
	}

	delete(id: number): Observable<void> {
		return this.#http.delete<void>(`${this.#adminUrl}/${id}`);
	}
}
