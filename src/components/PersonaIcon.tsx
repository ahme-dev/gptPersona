import { VNode } from "preact";

export function PersonaIcon(props: {
	isCurrent: boolean;
	click: () => void;
	children: VNode;
}) {
	return (
		<div
			onClick={() => props.click()}
			class={`cursor-pointer w-12 h-12 sm:w-16 sm:h-16 flex-center rounded-full border-2 active:border-red-600 transition-all
				${props.isCurrent ? "border-red-600" : "border-neutral-300"}
				`}
		>
			{props.children}
			{/* <h1 class="text-lg sm:text-2xl font-bold">{props.title}</h1> */}
		</div>
	);
}
