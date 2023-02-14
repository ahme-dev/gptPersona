import { useSnapshot } from "valtio";
import { appSet, personasSet } from "../state";
import { PersonaIcon } from "./PersonaIcon";

export function Personas() {
	const appRead = useSnapshot(appSet);
	const personasRead = useSnapshot(personasSet);

	return (
		<div class="flex flex-row gap-8">
			{personasRead.map((persona, i) => {
				return (
					<PersonaIcon
						click={() => (appSet.index = i)}
						title={persona.fullname[0] + persona.fullname[1]}
						isCurrent={appRead.index === i ? true : false}
					/>
				);
			})}
		</div>
	);
}
