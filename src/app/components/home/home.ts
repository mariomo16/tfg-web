import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ZoneAccents } from "../../core/constants/zone.constants";
import type { Zone, ZoneResponse } from "../../core/models/zone.model";
import { ZoneService } from "../../core/services/zone.service";
import { Icons, ZoneIcons } from "../../shared/icons/icons";
import { SafeHtmlPipe } from "../../shared/pipes/safe-html.pipe";
import { Footer } from "../layout/footer/footer";
import { Navbar } from "../layout/navbar/navbar";
import { ZoneCard } from "../zone-card/zone-card";

function mapZone(zone: ZoneResponse): Zone {
	return {
		...zone,
		pricePerSlot: zone.price_per_slot,
		availableComputers: zone.computers.filter(
			(computer) => computer.status === "available",
		).length,
		totalComputers: zone.computers.length,
		icon: ZoneIcons[zone.name],
		accent: ZoneAccents[zone.name],
	};
}

@Component({
	selector: "app-home",
	templateUrl: "./home.html",
	imports: [Navbar, ZoneCard, Footer, SafeHtmlPipe],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
	private readonly zoneService = inject(ZoneService);
	private readonly zonesResponse = toSignal(this.zoneService.getAll());

	readonly zones = computed(() => this.zonesResponse()?.map(mapZone));
	readonly loadingIcon = Icons.load;
}
