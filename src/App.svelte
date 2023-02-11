<script lang="ts">
	import Icon from "@iconify/svelte";
</script>

<div class="min-h-screen min-w-screen flex flex-col">
	<nav class="p-8 flex flex-row justify-between w-full">
		<h1>Title</h1>
		<div>Icons</div>
		<p>Something</p>
	</nav>
	<main class="p-8 grow flex items-center justify-center">
		<div class="flex-center gap-4 border-2 border-black p-4">
			<div class="flex-center flex-col gap-2">
				<input class="border-2 border-black" type="text" />
				<input class="border-2 border-black" type="text" />
			</div>
			<div class="flex-center flex-col gap-2">
				<button class="flex-center">
					<Icon icon="mdi-light:delete" class="h-10 w-10" />
				</button>
				<button class="flex-center">
					<Icon icon="mdi-light:clipboard-text" class="h-10 w-10" />
				</button>
				<button class="flex-center">
					<Icon icon="mdi-light:dots-horizontal" class="h-10 w-10" />
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
