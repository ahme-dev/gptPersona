export function FormTextarea(props: {
	title: string;
	value: string;
	setValue: () => void;
}) {
	return (
		<div class="flex flex-row gap-2 p-2">
			<label for={props.title.toLowerCase()} class="font-bold">
				{props.title}
			</label>
			<textarea name={props.title.toLowerCase()} />
		</div>
	);
}
