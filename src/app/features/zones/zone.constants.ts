import { Icons } from "../../shared/icons/icons";
import type { ZoneName } from "./zone.model";

export const ZONE_ACCENTS: Record<ZoneName, string> = {
	"Zona Gaming": "#34d399",
	"Zona Torneo": "#60a5fa",
	"Zona VIP": "#a78bfa",
};

export const ZONE_ICONS: Record<ZoneName, string> = {
	"Zona Gaming": Icons.cpuChip,
	"Zona Torneo": Icons.trophy,
	"Zona VIP": Icons.sparkles,
};
