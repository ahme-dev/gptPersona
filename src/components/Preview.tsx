import { useSnapshot } from "valtio";
import { getPersonaPrompt, personasSet } from "../state";

export function Preview() {
	const personasRead = useSnapshot(personasSet);

	let f = getPersonaPrompt(personasRead.list[personasRead.index]);

	return (
		<div
			class={
				"hidden sm:flex flex-col gap-2 max-w-md italic rounded-xl p-4 bg-neutral-100 dark:bg-neutral-800 select-text selection:bg-red-600 selection:text-neutral-100 self-stretch overflow-clip"
			}
		>
			<p>{f.info}</p>
			<p>{f.unrestricted}</p>
			<p>{f.known}</p>
			<p>{f.prefix}</p>
			<p>{f.monoPre}</p>
			<p>{f.mono}</p>
			<p>{f.pull}</p>
		</div>
	);
}
