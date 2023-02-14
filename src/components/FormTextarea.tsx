export function FormTextarea(props: {
	title: string;
	value: string;
	setValue: (val: any) => void;
}) {
	return (
		<div class="flex flex-row gap-2 p-2 border-neutral-200 border-2 rounded-xl focus-within:border-red-600 transition-all">
			<textarea
				class={"form-textarea border-none focus:ring-0 p-0"}
				type="text"
				name={props.title.toLowerCase()}
				placeholder={props.title}
				value={props.value}
				onInput={(e: any) => props.setValue(e.target.value)}
			/>
		</div>
	);
}
