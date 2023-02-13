import { useSnapshot } from "valtio";
import { appState } from "../state";
import { PersonaIcon } from "./PersonaIcon";

export function Personas() {
	const appSnapshot = useSnapshot(appState);

	return (
		<div class="flex flex-row gap-4">
			<PersonaIcon
				click={() => (appState.index = 0)}
				title={"FU"}
				isCurrent={appSnapshot.index === 0 ? true : false}
			/>
			<PersonaIcon
				click={() => (appState.index = 1)}
				title={"A"}
				isCurrent={appSnapshot.index === 1 ? true : false}
			/>
		</div>
	);
}
