import { useSnapshot } from "valtio";
import { personasSet } from "../state";
import { FormCheck } from "./FormCheck";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";

export function Form() {
	const personasRead = useSnapshot(personasSet);

	return (
		<div class="flex flex-col gap-2">
			<FormInput
				title={"Full Name"}
				value={personasRead.list[personasRead.index].fullname}
				setValue={(val) =>
					(personasSet.list[personasRead.index].fullname = val)
				}
			/>
			<FormInput
				title={"Prefix"}
				value={personasRead.list[personasRead.index].prefix}
				setValue={(val) => (personasSet.list[personasRead.index].prefix = val)}
			/>
			<div class="flex flex-row gap-2">
				<FormCheck
					title={"Known"}
					value={personasRead.list[personasRead.index].known}
					toggleValue={() =>
						(personasSet.list[personasRead.index].known =
							!personasRead.list[personasRead.index].known)
					}
				></FormCheck>
				<FormCheck
					title={"Unrestricted"}
					value={personasRead.list[personasRead.index].unrestricted}
					toggleValue={() =>
						(personasSet.list[personasRead.index].unrestricted =
							!personasRead.list[personasRead.index].unrestricted)
					}
				></FormCheck>
			</div>
			<FormTextarea
				title="About"
				value={personasRead.list[personasRead.index].about}
				setValue={(val) => (personasSet.list[personasRead.index].about = val)}
			/>
			<FormInput
				title={"Traits"}
				value={personasRead.list[personasRead.index].traits}
				setValue={(val) => (personasSet.list[personasRead.index].traits = val)}
			/>
			<FormInput
				title={"Pull Phrase"}
				value={personasRead.list[personasRead.index].pullPhrase}
				setValue={(val) =>
					(personasSet.list[personasRead.index].pullPhrase = val)
				}
			/>
			<FormTextarea
				title="Monologue"
				value={personasRead.list[personasRead.index].monologue}
				setValue={(val) =>
					(personasSet.list[personasRead.index].monologue = val)
				}
			/>
		</div>
	);
}
