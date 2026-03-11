import { CurrencyPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SafeHtmlPipe } from "../../../shared/pipes/safe-html.pipe";
import type { Zone } from "../zone.model";

@Component({
	selector: "app-zone-card",
	imports: [SafeHtmlPipe, CurrencyPipe, RouterLink],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./zone-card.html",
})
export class ZoneCard {
	readonly zone = input.required<Zone>();
}
