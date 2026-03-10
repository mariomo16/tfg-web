import { Component, inject, OnInit, Renderer2, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App implements OnInit {
	protected readonly title = signal("tfg-web");
	private readonly renderer = inject(Renderer2);

	ngOnInit() {
		this.renderer.setStyle(document.body, "visibility", "visible");
		this.renderer.setStyle(document.body, "opacity", "1");
	}
}
