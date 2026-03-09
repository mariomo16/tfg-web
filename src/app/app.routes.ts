import type { Routes } from "@angular/router";
import { Login } from "./components/auth/login/login";
import { Register } from "./components/auth/register/register";
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
	{
		path: "login",
		component: Login,
		title: "Iniciar sesión",
	},
	{
		path: "register",
		component: Register,
		title: "¡Registrate!",
	},
];
