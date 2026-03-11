import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { RouterLink } from "@angular/router";
import { ZoneService } from "../../../zones/zone.service";

@Component({
	selector: "app-zone-list",
	imports: [RouterLink],
	templateUrl: "./zone-list.html",
})
export class ZoneList {
	readonly #zoneService = inject(ZoneService);
	protected readonly zones = toSignal(this.#zoneService.getAll());
}
