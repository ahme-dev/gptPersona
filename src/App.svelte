<script lang="ts">
	import { counter } from "./stores";

	let countValue = 0;
	counter.subscribe((value) => {
		countValue = value;
	});
</script>

<main>
	<p>{countValue}</p>
	<h1 class="text-green-600">Hello App</h1>
</main>
