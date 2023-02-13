export function FormInput(props: {
	title: string;
	value: string;
	setValue: (val: any) => void;
}) {
	return (
		<div class="flex flex-row gap-2 p-2 border-b-neutral-300 border-b-2 focus-within:border-b-red-600 transition-all">
			<label for={props.title.toLowerCase()} class="font-bold shrink-0">
				{props.title + ":"}
			</label>
			<input
				type="text"
				name={props.title.toLowerCase()}
				value={props.value}
				onInput={(e: any) => props.setValue(e.target.value)}
			/>
		</div>
	);
}
