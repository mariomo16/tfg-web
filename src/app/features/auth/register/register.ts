import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SocialIcons } from "../../../shared/icons/icons";
import { SafeHtmlPipe } from "../../../shared/pipes/safe-html.pipe";

@Component({
	selector: "app-register",
	imports: [RouterLink, SafeHtmlPipe],
	templateUrl: "./register.html",
})
export class Register {
	protected readonly githubIcon = SocialIcons.github;
	protected readonly googleIcon = SocialIcons.google;
}
