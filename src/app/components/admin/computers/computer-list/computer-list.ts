import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { RouterLink } from "@angular/router";
import { ComputerStatusAccents } from "../../../../core/constants/computer.constants";
import type {
	Computer,
	ComputerResponse,
} from "../../../../core/models/computer.model";
import { ComputerService } from "../../../../core/services/computer.service";

function mapComputer(computer: ComputerResponse): Computer {
	return {
		...computer,
		status: status[computer.status] as Computer["status"],
		statusAccent: ComputerStatusAccents[computer.status],
	};
}

const status: Record<string, string> = {
	available: "Disponible",
	occupied: "Ocupado",
	maintenance: "En mantenimiento",
};

@Component({
	selector: "app-computer-list",
	imports: [RouterLink],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./computer-list.html",
})
export class ComputerList {
	private readonly computerService = inject(ComputerService);
	private readonly computersResponse = toSignal(this.computerService.getAll());

	readonly computers = computed(() =>
		this.computersResponse()?.map(mapComputer),
	);

	protected readonly computerKeys: string[] = [
		"ID",
		"NOMBRE",
		"ZONA",
		"ESTADO",
		"SPECS",
	];

	deleteComputer(id: number): void {
		this.computerService.delete(id).subscribe();
	}
}
