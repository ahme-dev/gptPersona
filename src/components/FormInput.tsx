export function FormInput(props: {
	title: string;
	value: string;
	setValue: (val: any) => void;
}) {
	return (
		<div class="flex flex-row gap-2 p-2 border-b-neutral-200 border-2 rounded-xl focus-within:border-red-600 transition-all">
			<input
				type="text"
				name={props.title.toLowerCase()}
				placeholder={props.title}
				value={props.value}
				onInput={(e: any) => props.setValue(e.target.value)}
			/>
		</div>
	);
}
