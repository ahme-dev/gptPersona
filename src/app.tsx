import { Form } from "./components/Form";
import { Personas } from "./components/Personas";
import { Preview } from "./components/Preview";
import { Actions } from "./components/Actions";
import { useSnapshot } from "valtio";
import { personasSet } from "./state";
import { FooterLeft } from "./components/FooterLeft";

export function App() {
	const personasRead = useSnapshot(personasSet);
	return (
		<div class="min-h-screen min-w-screen flex flex-col select-none text-neutral-700 dark:bg-neutral-900 dark:text-neutral-100">
			<header class="p-4 sm:p-8 flex flex-row items-center sm:items-start justify-between w-full">
				<h1 class="text-xl sm:text-2xl font-bold">
					gpt<span class="text-red-600">Persona</span>
				</h1>
				<Personas></Personas>
			</header>

			<main class="grow flex items-center justify-center">
				<div class="flex items-start p-4 rounded-lg border-2 border-neutral-200 dark:border-neutral-700 gap-4">
					{personasRead.list.length === 0 ? (
						<h1>Nothing to show</h1>
					) : (
						<>
							<Form />
							<Actions></Actions>
							<Preview></Preview>
						</>
					)}
				</div>
			</main>

			<footer
				class={"p-4 sm:p-8 flex flex-col sm:flex-row justify-between gap-4"}
			>
				<FooterLeft></FooterLeft>
				<div class={"self-start flex flex-row gap-2 sm:gap-4 italic py-2"}>
					{[
						{
							link: "https://github.com/ahmeddots",
							title: "ahmed.systems 🌐",
						},
						{
							link: "https://github.com/ahmeddots/gptpersona",
							title: "open.source ♥️",
						},
					].map((item) => {
						return (
							<a
								href={item.link}
								class="text-sm cursor-pointer"
								target={"_blank"}
							>
								{item.title}
							</a>
						);
					})}
				</div>
			</footer>
		</div>
	);
}
