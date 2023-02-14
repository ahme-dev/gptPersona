import { useSnapshot } from "valtio";
import { personasSet } from "../state";
import { getFirstTwoLetters } from "../utils";
import { PersonaIcon } from "./PersonaIcon";

export function Personas() {
	const personasRead = useSnapshot(personasSet);

	return (
		<div class="flex flex-row gap-4 sm:gap-8">
			{personasRead.list.map((persona, i) => {
				return (
					<PersonaIcon
						click={() => (personasSet.index = i)}
						isCurrent={personasRead.index === i ? true : false}
					>
						<h1 class="text-lg sm:text-2xl font-bold">
							{getFirstTwoLetters(persona.fullname, "GP")}
						</h1>
					</PersonaIcon>
				);
			})}
			<PersonaIcon click={() => {}} isCurrent={false}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="w-6 h-6"
				>
					<path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" />
				</svg>
			</PersonaIcon>
		</div>
	);
}
