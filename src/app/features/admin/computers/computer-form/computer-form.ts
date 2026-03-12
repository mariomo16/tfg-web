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
	ComputerStatus,
	CreateComputerDto,
	UpdateComputerDto,
} from "../../../computers/computer.model";
import { ComputerService } from "../../../computers/computer.service";
import { ZoneService } from "../../../zones/zone.service";

@Component({
	selector: "app-computer-form",
	imports: [RouterLink, SafeHtmlPipe, FormsModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./computer-form.html",
})
export class ComputerForm {
	readonly #computerService = inject(ComputerService);
	readonly #zoneService = inject(ZoneService);
	readonly #route = inject(ActivatedRoute);
	readonly #router = inject(Router);

	readonly #computerId =
		Number(this.#route.snapshot.paramMap.get("id")) || null;

	protected readonly isEditing = computed(() => this.#computerId !== null);

	protected readonly icons = Icons;
	protected readonly loadingIcon = LoadingIcons.spinner;

	protected readonly name = model<string>("");
	protected readonly zoneId = model<number | "">("");
	protected readonly status = model<ComputerStatus>("available");
	protected readonly specs = model<string>("");

	protected readonly zonesResource = resource({
		loader: () => firstValueFrom(this.#zoneService.getAll()),
	});

	protected readonly computerResource = resource({
		loader: () =>
			this.#computerId
				? firstValueFrom(this.#computerService.getById(this.#computerId))
				: Promise.resolve(null),
	});

	constructor() {
		effect(() => {
			const computer = this.computerResource.value();
			if (!computer) return;
			this.name.set(computer.name);
			this.zoneId.set(computer.zone_id);
			this.status.set(computer.statusRaw);
			this.specs.set(computer.specs);
		});
	}

	protected onSubmit(): void {
		if (!this.name() || !this.zoneId() || !this.status()) return;

		const dto: CreateComputerDto | UpdateComputerDto = {
			name: this.name(),
			zone_id: Number(this.zoneId()),
			status: this.status(),
			specs: this.specs(),
		};

		const action$ = this.#computerId
			? this.#computerService.update(this.#computerId, dto)
			: this.#computerService.create(dto);

		action$.subscribe(() => this.#router.navigate(["/admin/computers"]));
	}
}
