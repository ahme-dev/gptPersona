export function FormTextarea(props: {
	title: string;
	value: string;
	setValue: (val: any) => void;
}) {
	return (
		<div class="flex flex-row gap-2 p-2">
			<label for={props.title.toLowerCase()} class="font-bold">
				{props.title}
			</label>
			<textarea
				type="text"
				name={props.title.toLowerCase()}
				value={props.value}
				onInput={(e: any) => props.setValue(e.target.value)}
			/>
		</div>
	);
}
