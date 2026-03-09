import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { APP } from "../../../core/constants/app.constants";

@Component({
	selector: "app-footer",
	imports: [RouterLink],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./footer.html",
})
export class Footer {
	readonly appName = APP.name;
	readonly appVersion = APP.version;
}
