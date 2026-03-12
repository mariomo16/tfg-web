import {
	ChangeDetectionStrategy,
	Component,
	computed,
	effect,
	inject,
	model,
	resource,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { firstValueFrom } from "rxjs";
import { Icons, LoadingIcons } from "../../../../shared/icons/icons";
import { SafeHtmlPipe } from "../../../../shared/pipes/safe-html.pipe";
import type {
	CreateZoneDto,
	UpdateZoneDto,
	ZoneName,
} from "../../../zones/zone.model";
import { ZoneService } from "../../../zones/zone.service";

@Component({
	selector: "app-zone-form",
	imports: [RouterLink, SafeHtmlPipe, FormsModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./zone-form.html",
})
export class ZoneForm {
	readonly #zoneService = inject(ZoneService);
	readonly #route = inject(ActivatedRoute);
	readonly #router = inject(Router);

	readonly #zoneId = Number(this.#route.snapshot.paramMap.get("id")) || null;

	protected readonly isEditing = computed(() => this.#zoneId !== null);

	protected readonly icons = Icons;
	protected readonly loadingIcon = LoadingIcons.spinner;

	protected readonly name = model<ZoneName | "">("");
	protected readonly pricePerSlot = model<number | "">("");

	protected readonly zoneResource = resource({
		loader: () =>
			this.#zoneId
				? firstValueFrom(this.#zoneService.getById(this.#zoneId))
				: Promise.resolve(null),
	});

	constructor() {
		effect(() => {
			const zone = this.zoneResource.value();
			if (!zone) return;
			this.name.set(zone.name);
			this.pricePerSlot.set(zone.pricePerSlot);
		});
	}

	protected onSubmit(): void {
		if (!this.name() || this.pricePerSlot() === "") return;

		const dto: CreateZoneDto | UpdateZoneDto = {
			name: this.name() as ZoneName,
			price_per_slot: Number(this.pricePerSlot()),
		};

		const action$ = this.#zoneId
			? this.#zoneService.update(this.#zoneId, dto)
			: this.#zoneService.create(dto);

		action$.subscribe(() => this.#router.navigate(["/admin/zones"]));
	}
}
