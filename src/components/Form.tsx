import { usePersonasStore } from "../stores";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";

export function Form() {
	const current = usePersonasStore((state) => state.getCurrent);
	const setCurrent = usePersonasStore((state) => state.setCurrent);

	return (
		<div class="flex flex-col gap-2">
			<h1>helo</h1>
			<FormInput
				title={"Full Name"}
				value={current().fullname}
				setValue={(val) => setCurrent({ ...current(), fullname: val })}
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
