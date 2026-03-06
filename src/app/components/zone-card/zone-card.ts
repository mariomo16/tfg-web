import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import type { Zone } from "../../core/models/zone.model";
import { SafeHtmlPipe } from "../../shared/pipes/safe-html.pipe";

@Component({
	selector: "app-zone-card",
	imports: [SafeHtmlPipe],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./zone-card.html",
})
export class ZoneCard {
	readonly zone = input.required<Zone>();
}
