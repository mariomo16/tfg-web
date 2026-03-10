import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App {
	protected readonly title = signal("tfg-web");

	ngOnInit() {
		// Para que eliminar el FOUC en producción (a la cuarta va la vencida)
		const splash = document.getElementById("app-splash");
		const html = document.documentElement;

		html.classList.remove("is-loading");
		splash?.remove();
	}
}
