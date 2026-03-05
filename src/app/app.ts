import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import type { ApiInterface } from "./models/apiInterface";
import { Hola } from "./services/apiTest";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App {
	protected readonly title = signal("tfg-web");

  apiResponse!: ApiInterface;

	constructor(private hola: Hola) {
		this.getApi();
	}

  getApi() {
      this.hola.getApi().subscribe((res) => {
			this.apiResponse = res;
      console.log(this.apiResponse);
		});
  }
}
