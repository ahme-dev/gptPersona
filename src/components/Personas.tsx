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
			<PersonaIcon click={() => personasSet.addToList()} isCurrent={false}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="w-6 h-6"
				>
					<path
						fillRule="evenodd"
						d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
						clipRule="evenodd"
					/>
				</svg>
			</PersonaIcon>
		</div>
	);
}
