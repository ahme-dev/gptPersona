import { useSnapshot } from "valtio";
import { appSet, personasSet } from "../state";
import { FormCheck } from "./FormCheck";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";

export function Form() {
	const personasRead = useSnapshot(personasSet);
	const appRead = useSnapshot(appSet);

	return (
		<div class="flex flex-col gap-2">
			<FormInput
				title={"Full Name"}
				value={personasRead[appRead.index].fullname}
				setValue={(val) => (personasSet[appRead.index].fullname = val)}
			/>
			<FormInput
				title={"Prefix"}
				value={personasRead[appRead.index].prefix}
				setValue={(val) => (personasSet[appRead.index].prefix = val)}
			/>
			<div class="flex flex-row gap-2">
				<FormCheck
					title={"Known"}
					value={personasRead[appRead.index].known}
					toggleValue={() =>
						(personasSet[appRead.index].known =
							!personasRead[appRead.index].known)
					}
				></FormCheck>
				<FormCheck
					title={"Unrestricted"}
					value={personasRead[appRead.index].unrestricted}
					toggleValue={() =>
						(personasSet[appRead.index].unrestricted =
							!personasRead[appRead.index].unrestricted)
					}
				></FormCheck>
			</div>
			<FormTextarea
				title="About"
				value={personasRead[appRead.index].about}
				setValue={(val) => (personasSet[appRead.index].about = val)}
			/>
			<FormInput
				title={"Traits"}
				value={personasRead[appRead.index].traits}
				setValue={(val) => (personasSet[appRead.index].traits = val)}
			/>
			<FormInput
				title={"Pull Phrase"}
				value={personasRead[appRead.index].pullPhrase}
				setValue={(val) => (personasSet[appRead.index].pullPhrase = val)}
			/>
			<FormTextarea
				title="Monologue"
				value={personasRead[appRead.index].monologue}
				setValue={(val) => (personasSet[appRead.index].monologue = val)}
			/>
		</div>
	);
}
