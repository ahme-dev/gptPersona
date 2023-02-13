export function PersonaIcon(props: {
	title: string;
	isCurrent: boolean;
	click: () => void;
}) {
	return (
		<div
			onClick={() => props.click()}
			class={`cursor-pointer w-16 h-16 flex-center rounded-xl border border-black shadow-sm shadow-red-600 active:bg-red-600 active:text-white transition-all" +
				${props.isCurrent ? "bg-red-600 text-white" : "bg-white"}
				`}
		>
			<h1 class="text-2xl font-bold">{props.title}</h1>
		</div>
	);
}
