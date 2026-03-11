import { Location } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-not-found",
	imports: [RouterLink],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./not-found.html",
})
export class NotFound {
	readonly #location = inject(Location);

	protected goBack(): void {
		this.#location.back();
	}
}
