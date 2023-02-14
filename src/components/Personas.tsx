import { useSnapshot } from "valtio";
import { appSet, personasSet } from "../state";
import { getFirstTwoLetters } from "../utils";
import { PersonaIcon } from "./PersonaIcon";

export function Personas() {
	const appRead = useSnapshot(appSet);
	const personasRead = useSnapshot(personasSet);

	return (
		<div class="flex flex-row gap-4 sm:gap-8">
			{personasRead.map((persona, i) => {
				return (
					<PersonaIcon
						click={() => (appSet.index = i)}
						title={getFirstTwoLetters(persona.fullname, "GP")}
						isCurrent={appRead.index === i ? true : false}
					/>
				);
			})}
		</div>
	);
}
