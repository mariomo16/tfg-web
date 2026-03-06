import type { Routes } from "@angular/router";
import { Health } from "./components/health/health";
import { Home } from "./components/home/home";

export const routes: Routes = [
	{
		path: "",
		component: Home,
		title: "Inicio",
	},
	{
		path: "status",
		component: Health,
		title: "Estado del sistema",
	},
];
