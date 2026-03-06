import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import type { ServerStatusResponse } from "./core/models/server-status.model";
import { ServerStatusService } from "./core/services/server-status.service";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App {
	protected readonly title = signal("tfg-web");
	serverStatus = signal<ServerStatusResponse | undefined>(undefined);

	constructor(private serverStatusService: ServerStatusService) {
		this.serverStatusService.getServerStatus().subscribe((res) => {
			this.serverStatus.set(res);
		});
	}
}
