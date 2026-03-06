import { ChangeDetectionStrategy, Component } from "@angular/core";
import type { Zone } from "../../core/models/zone.model";
import { Icons } from "../../shared/icons/icons";
import { Footer } from "../layout/footer/footer";
import { Navbar } from "../layout/navbar/navbar";
import { ZoneCard } from "../zone-card/zone-card";

@Component({
	selector: "app-home",
	imports: [Navbar, ZoneCard, Footer],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./home.html",
})
export class Home {
	readonly zones: Zone[] = [
		{
			id: 1,
			name: "Zona Gaming",
			pricePerSlot: 2.5,
			availableComputers: 8,
			totalComputers: 12,
			accent: "#34d399",
			icon: Icons.cpuChip,
		},
		{
			id: 2,
			name: "Zona Torneo",
			pricePerSlot: 3.5,
			availableComputers: 12,
			totalComputers: 12,
			accent: "#60a5fa",
			icon: Icons.trophy,
		},
		{
			id: 3,
			name: "Zona VIP",
			pricePerSlot: 5.0,
			availableComputers: 3,
			totalComputers: 6,
			accent: "#a78bfa",
			icon: Icons.sparkles,
		},
	];
}
