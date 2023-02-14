export function PersonaIcon(props: {
	title: string;
	isCurrent: boolean;
	click: () => void;
}) {
	return (
		<div
			onClick={() => props.click()}
			class={`cursor-pointer w-16 h-16 flex-center rounded-full border-2 active:border-red-600 transition-all
				${props.isCurrent ? "border-red-600" : "border-neutral-300"}
				`}
		>
			<h1 class="text-2xl font-bold">{props.title}</h1>
		</div>
	);
}
