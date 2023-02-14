export function FormCheck(props: {
	title: string;
	value: boolean;
	toggleValue: () => void;
}) {
	return (
		<div class="flex flex-row items-center gap-2 p-2 border-b-neutral-200 border-2 rounded-xl focus-within:border-red-600 transition-all">
			<label htmlFor={props.title.toLowerCase()}>{props.title}</label>
			<input
				class={
					"form-checkbox border-none focus:ring-0 p-0 bg-neutral-200 rounded-md text-red-600"
				}
				type="checkbox"
				name={props.title.toLowerCase()}
				placeholder={props.title}
				checked={props.value}
				onClick={() => props.toggleValue()}
			/>
		</div>
	);
}
