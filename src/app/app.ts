import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import type { ServerStatusResponse } from "./core/models/status.interface";
import { ApiService } from "./core/services/api.service";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App {
	protected readonly title = signal("tfg-web");
	serverStatus = signal<ServerStatusResponse | undefined>(undefined);

	constructor(private apiService: ApiService) {
		this.apiService.getServerStatus().subscribe((res) => {
			this.serverStatus.set(res);
		});
	}
}
