import {
	ChangeDetectionStrategy,
	Component,
	inject,
	resource,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { firstValueFrom } from "rxjs";
import { LoadingIcons } from "../../shared/icons/icons";
import { SafeHtmlPipe } from "../../shared/pipes/safe-html.pipe";
import { Footer } from "../../shared/ui/layout/footer/footer";
import { Navbar } from "../../shared/ui/layout/navbar/navbar";
import { ZoneService } from "../zones/zone.service";
import { ZoneCard } from "../zones/zone-card/zone-card";

@Component({
	selector: "app-home",
	imports: [Navbar, ZoneCard, Footer, SafeHtmlPipe, RouterLink],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./home.html",
})
export class Home {
	readonly #zoneService = inject(ZoneService);

	protected readonly loadingIcon = LoadingIcons.spinner;

	protected readonly zonesResource = resource({
		loader: () => firstValueFrom(this.#zoneService.getAll()),
	});
}
