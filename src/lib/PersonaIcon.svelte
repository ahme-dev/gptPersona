<script lang="ts">
	export let title: string;
	export let current: boolean;
</script>

<div
	class="cursor-pointer w-16 h-16 flex-center rounded-lg border border-black shadow-sm shadow-red-600 active:bg-red-600 active:text-white transition-all"
>
	<h1 class="text-2xl font-bold">{title}</h1>
</div>
