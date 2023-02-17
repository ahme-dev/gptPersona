import { Form } from "./components/Form";
import { Personas } from "./components/Personas";
import { Preview } from "./components/Preview";
import { Actions } from "./components/Actions";
import { useSnapshot } from "valtio";
import { personasSet } from "./state";
import { FooterLeft } from "./components/FooterLeft";
import logo from "./assets/logo.png";

export function App() {
	const personasRead = useSnapshot(personasSet);
	return (
		<div class="min-h-screen min-w-screen flex flex-col select-none text-neutral-700 dark:bg-neutral-900 dark:text-neutral-100">
			<header class="p-4 sm:p-8 flex flex-row items-center sm:items-start justify-between w-full">
				<div class={"flex flex-row gap-4 sm:gap-8 items-center"}>
					<img
						src={logo}
						class={
							"hidden sm:block rounded-full h-12 w-12 sm:h-16 sm:w-16 border-red-600 p-1 border-2"
						}
					/>
					<h1 class={"text-xl sm:text-2xl font-bold"}>
						gpt<span class={"text-red-600"}>Persona</span>
					</h1>
				</div>
				<Personas></Personas>
			</header>

			<main class="grow flex items-center justify-center">
				<div class="flex items-start gap-4">
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
