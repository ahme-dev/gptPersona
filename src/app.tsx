import { Form } from "./components/Form";
import { Personas } from "./components/Personas";
import { Preview } from "./components/Preview";
import { Actions } from "./components/Actions";
import { useSnapshot } from "valtio";
import { personasSet } from "./state";

export function App() {
	const personasRead = useSnapshot(personasSet);

	return (
		<div class="min-h-screen min-w-screen flex flex-col select-none text-neutral-700">
			<nav class="p-8 flex flex-row items-center sm:items-start justify-between w-full">
				<h1 class="text-xl  sm:text-2xl font-bold">
					gpt<span class="text-red-600">Persona</span>
				</h1>
				<Personas></Personas>
			</nav>

			<main class="grow flex items-center justify-center">
				<div class="flex items-start p-4 rounded-lg border-2 border-neutral-200 gap-4">
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

			<footer class="p-8 flex flex-col gap-4">
				<div class="flex flex-row gap-8">
					<h1 class="text-lg font-bold border-b-2 border-b-neutral-700">
						Disclaimer
					</h1>
					<h1 class="text-lg font-bold">FAQ</h1>
				</div>
				<div>Body (Switched)</div>
			</footer>
		</div>
	);
}
