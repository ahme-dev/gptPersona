import { useSnapshot } from "valtio";
import { appSet, getPersonaPrompt, personasSet } from "../state";

export function Preview() {
	const personasRead = useSnapshot(personasSet);
	const appRead = useSnapshot(appSet);

	let f = getPersonaPrompt(personasRead[appRead.index]);

	return (
		<div
			class={
				"flex flex-col gap-2 max-w-md italic rounded-xl p-4 bg-neutral-100 select-text selection:bg-red-600 selection:text-neutral-100 h-full overflow-clip"
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
