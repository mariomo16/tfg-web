import { Component, type OnInit, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App implements OnInit {
	protected readonly title = signal("tfg-web");

	ngOnInit() {
		// Timeout que se ejecutara cuando todo este cargado para que no haya FOUC (a la cuarta va la vencida)
		setTimeout(() => {
			const splash = document.getElementById("app-splash");
			const html = document.documentElement;

			if (splash) {
				splash.style.opacity = "0";
				splash.style.visibility = "hidden";
			}

			html.classList.remove("is-loading");

			// Limpiar el splash del dom despues de la transicion
			setTimeout(() => {
				splash?.remove();
			}, 500);
		}, 0);
	}
}
