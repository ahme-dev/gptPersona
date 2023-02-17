export function FormInput(props: {
	title: string;
	value: string;
	setValue: (val: any) => void;
}) {
	return (
		<div class="flex flex-row gap-2 p-2 border-neutral-300 dark:border-neutral-700 border-2 rounded-xl focus-within:border-red-600 transition-all">
			<input
				class={"form-input border-none focus:ring-0 p-0 bg-inherit"}
				type="text"
				name={props.title.toLowerCase()}
				placeholder={props.title}
				value={props.value}
				onInput={(e: any) => props.setValue(e.target.value)}
			/>
		</div>
	);
}
