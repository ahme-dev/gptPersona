<script lang="ts">
	import Icon from "@iconify/svelte";
	import Form from "./lib/Form.svelte";
</script>

<div class="min-h-screen min-w-screen flex flex-col">
	<nav class="p-8 flex flex-row justify-between w-full">
		<h1>Title</h1>
		<div>Icons</div>
		<p>Something</p>
	</nav>
	<main class="p-8 grow flex items-center justify-center">
		<div
			class="flex-center gap-4 border border-black shadow-sm shadow-red-600 p-4 rounded-lg"
		>
			<Form />
			<div class="flex-center flex-col gap-2">
				<button
					class="p-1 flex-center rounded-lg border border-black shadow-sm shadow-red-600 active:bg-red-500 active:text-white transition-all"
				>
					<Icon icon="mdi-light:delete" class="h-8 w-8" />
				</button>
				<button
					class="p-1 flex-center rounded-lg border border-black shadow-sm shadow-red-600 active:bg-red-500 active:text-white transition-all"
				>
					<Icon icon="mdi-light:clipboard-text" class="h-8 w-8" />
				</button>
				<button
					class="p-1 flex-center rounded-lg border border-black shadow-sm shadow-red-600 active:bg-red-500 active:text-white transition-all"
				>
					<Icon icon="mdi-light:dots-horizontal" class="h-8 w-8" />
				</button>
			</div>
			<div>Preview</div>
		</div>
	</main>
	<footer class="p-8">
		<div>Headers</div>
		<div>Body (Switched)</div>
	</footer>
</div>
