import { Component, inject, type OnInit, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SvgSpriteService } from "./core/svg.sprite.service";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App implements OnInit {
  readonly #sprite = inject(SvgSpriteService);

	ngOnInit() {
		// Para que eliminar el FOUC en producción (a la cuarta va la vencida)
		const splash = document.getElementById("app-splash");
		const html = document.documentElement;

		html.classList.remove("is-loading");
		splash?.remove();

    this.#sprite.load();
	}
}
