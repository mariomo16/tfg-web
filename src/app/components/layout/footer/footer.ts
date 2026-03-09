import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { APP } from "../../../core/constants/app.constants";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.html",
	imports: [RouterLink],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
	readonly appName = APP.name;
	readonly appVersion = APP.version;
}
