import { useSnapshot } from "valtio";
import { appState, personasState } from "../state";
import { FormInput } from "./FormInput";

export function Form() {
	const personas = useSnapshot(personasState);
	const app = useSnapshot(appState);

	return (
		<div class="flex flex-col gap-2">
			<h1>helo, {personas[app.index].fullname}</h1>
			<FormInput
				title={"Full Name"}
				value={personas[app.index].fullname}
				setValue={(val) => (personasState[app.index].fullname = val)}
			/>
			{/* 
			<FormInput title={"Prefix"} value={personas[0].prefix} />
			<div>
				<label for="known" class="font-bold">
					Known
				</label>
				<input
					type="checkbox"
					id="known"
					name="known"
					bind:checked={personas[0].known}
				/>
				<label for="unrestricted" class="font-bold">
					Unrestricted
				</label>
				<input
					type="checkbox"
					id="unrestricted"
					name="unrestricted"
					bind:checked={personas[0].unrestricted}
				/>
			</div>
			<FormTextarea title="About" value={personas[0].about} />
			<FormInput title={"Traits"} value={personas[0].traits} />
			<FormInput title={"Pull Phrase"} value={personas[0].pullPhrase} />
			<FormTextarea title="Monologue" value={personas[0].monologue} /> 
			*/}
		</div>
	);
}
