import { useSnapshot } from "valtio";
import { appSet } from "../state";
import { PersonaIcon } from "./PersonaIcon";

export function Personas() {
	const appSnapshot = useSnapshot(appSet);

	return (
		<div class="flex flex-row gap-8">
			<PersonaIcon
				click={() => (appSet.index = 0)}
				title={"FU"}
				isCurrent={appSnapshot.index === 0 ? true : false}
			/>
			<PersonaIcon
				click={() => (appSet.index = 1)}
				title={"A"}
				isCurrent={appSnapshot.index === 1 ? true : false}
			/>
		</div>
	);
}
