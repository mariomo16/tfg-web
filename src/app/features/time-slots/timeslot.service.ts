import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { map, type Observable } from "rxjs";
import { API_URL } from "../../core/tokens/api-url.token";
import type {
	CreateTimeSlotDto,
	TimeSlot,
	TimeSlotResponse,
	UpdateTimeSlotDto,
} from "./timeslot.model";

@Injectable({
	providedIn: "root",
})
export class TimeSlotService {
	readonly #http = inject(HttpClient);
	readonly #baseUrl = `${inject(API_URL)}/timeslots`;
	readonly #adminUrl = `${inject(API_URL)}/admin/timeslots`;

	getAll(): Observable<TimeSlot[]> {
		return this.#http
			.get<TimeSlotResponse[]>(this.#baseUrl)
			.pipe(
				map((timeslots) =>
					timeslots.map((timeslot) => this.#mapToTimeSlot(timeslot)),
				),
			);
	}

	getById(id: number): Observable<TimeSlot> {
		return this.#http
			.get<TimeSlotResponse>(`${this.#adminUrl}/${id}`)
			.pipe(map((timeslot) => this.#mapToTimeSlot(timeslot)));
	}

	create(data: CreateTimeSlotDto): Observable<TimeSlot> {
		return this.#http
			.post<TimeSlotResponse>(this.#adminUrl, data)
			.pipe(map((timeslot) => this.#mapToTimeSlot(timeslot)));
	}

	update(id: number, data: UpdateTimeSlotDto): Observable<TimeSlot> {
		return this.#http
			.put<TimeSlotResponse>(`${this.#adminUrl}/${id}`, data)
			.pipe(map((timeslot) => this.#mapToTimeSlot(timeslot)));
	}

	delete(id: number): Observable<void> {
		return this.#http.delete<void>(`${this.#adminUrl}/${id}`);
	}

	#mapToTimeSlot(response: TimeSlotResponse): TimeSlot {
		return {
			id: response.id,
			startTime: response.start_time.slice(0, 5),
			endTime: response.end_time.slice(0, 5),
			duration: this.#calcDuration(response.start_time, response.end_time),
			reservations: response.reservations,
		};
	}

	#calcDuration(start: string, end: string): number {
		const [startH, startM] = start.split(":").map(Number);
		const [endH, endM] = end.split(":").map(Number);
		return ((endH * 60 + endM) - (startH * 60 + startM)) / 60;
	}
}
