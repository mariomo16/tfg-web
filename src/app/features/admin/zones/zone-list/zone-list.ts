import { CurrencyPipe } from "@angular/common";
import {
	ChangeDetectionStrategy,
	Component,
	inject,
	resource,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { firstValueFrom } from "rxjs";
import { LoadingIcons } from "../../../../shared/icons/icons";
import { SafeHtmlPipe } from "../../../../shared/pipes/safe-html.pipe";
import { ZoneService } from "../../../zones/zone.service";

@Component({
	selector: "app-zone-list",
	imports: [RouterLink, CurrencyPipe, SafeHtmlPipe],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./zone-list.html",
})
export class ZoneList {
	readonly #zoneService = inject(ZoneService);

	protected readonly loadingIcon = LoadingIcons.spinner;

	protected readonly zonesResource = resource({
		loader: () => firstValueFrom(this.#zoneService.getAll()),
	});

	protected readonly columns = [
		{ key: "id", label: "ID" },
		{ key: "name", label: "NOMBRE" },
		{ key: "pricePerSlot", label: "PRECIO/FRANJA" },
		{ key: "computers", label: "ORDENADORES" },
	] as const;

	protected onDelete(id: number): void {
		this.#zoneService.delete(id).subscribe(() => this.zonesResource.reload());
	}
}
