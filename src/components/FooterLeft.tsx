import { useState } from "preact/hooks";

export function FooterLeft() {
	const [currentFooter, setCurrentFooter] = useState(0);

	const footers = [
		{
			id: 1,
			title: "Disclaimer",
			body: (
				<>
					<p class={"mb-2"}>
						<b>Heads up:</b> the prompt generator we're offering is purely for
						fun and learning. We're <b>not responsible</b> for any errors or
						biases that may come up. We <b>can't guarantee</b> that the prompts
						will be a perfect fit for your needs, but we hope you'll find them
						useful nonetheless.
					</p>
					<b>- ChatGPT</b>
				</>
			),
		},
		{
			id: 2,
			title: "Contribute",
			body: (
				<>
					<p>
						If you think this app can be improved in any way feel free to open
						an issue/discussion, or contribute the code yourself on the{" "}
						<a
							target={"_blank"}
							class={"underline text-red-500"}
							href="http://github.com/ahmeddots/gptpersona"
						>
							github{" "}
						</a>
						repository.
					</p>
				</>
			),
		},
		{
			id: 3,
			title: "Questions",
			body: (
				<>
					<h1 class={"font-bold"}>Why was this created?</h1>
					<p class={"mb-2"}>
						I originally asked ChatGPT to be a character, but it refused. After
						discovering DAN and doing some experimentation, I figured out that I
						just needed the right prompt. So, I created this app to easily
						compose the prompt for me.
					</p>
					<h1 class={"font-bold"}>How to use it?</h1>
					<p class={"mb-2"}>
						Just input your data and use the generated prompt to start a
						conversation with ChatGPT.
					</p>
					<h1 class={"font-bold"}>Was this section generated using ChatGPT?</h1>
					<p class={"mb-2"}>Yes, it was.</p>
				</>
			),
		},
	];

	return (
		<footer class="flex flex-col gap-4">
			<div class="flex flex-row gap-2 md:gap-4">
				{footers.map((item) => {
					return (
						<h1
							class={`text-sm sm:text-md font-bold p-2 rounded-xl border-2 border-neutral-700 cursor-pointer active:border-red-600
									${item.id === currentFooter ? "border-red-600" : ""}`}
							onClick={() =>
								item.id === currentFooter
									? setCurrentFooter(0)
									: setCurrentFooter(item.id)
							}
						>
							{item.title}
						</h1>
					);
				})}
			</div>
			{currentFooter !== 0 && (
				<div class={"max-w-lg text-sm sm:text-md"}>
					{footers[currentFooter - 1].body}
				</div>
			)}
		</footer>
	);
}
