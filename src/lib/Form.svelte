<script lang="ts">
	export let fullname = "John Doe";
	export let prefix = "John";
	export let known = false;
	export let about =
		"A chill man who likes to understand more about people around the world";
	export let unrestricted = true;
	export let traits = "chill, understanding, accepting";
	export let monologue =
		"I understand your words, and I believe you should take a break, have some time to relax, get your head straight. Then you come back better than before!";
	export let pullPhrase = "Be John";
</script>

<div class="flex flex-col gap-2">
	<div class="flex flex-row gap-2 border border-black rounded-lg p-2">
		<label for="fullname" class="font-bold">Full Name</label>
		<input type="text" id="fullname" name="fullname" bind:value={fullname} />
	</div>

	<div class="flex flex-row gap-2 border border-black rounded-lg p-2">
		<label for="prefix" class="font-bold">Prefix</label>
		<input type="text" id="prefix" name="prefix" bind:value={prefix} />
	</div>

	<div class="flex flex-row gap-4 border border-black rounded-lg p-2">
		<label for="known" class="font-bold">Known</label>
		<input type="checkbox" id="known" name="known" bind:checked={known} />
		<label for="unrestricted" class="font-bold">Unrestricted</label>
		<input
			type="checkbox"
			id="unrestricted"
			name="unrestricted"
			bind:checked={unrestricted}
		/>
	</div>

	<div class="flex flex-row gap-2 border border-black rounded-lg p-2">
		<label for="about" class="font-bold">About</label>
		<textarea id="about" name="about" bind:value={about} />
	</div>

	<div class="flex flex-row gap-2 border border-black rounded-lg p-2">
		<label for="traits" class="font-bold">Traits</label>
		<input type="text" id="traits" name="traits" bind:value={traits} />
	</div>

	<div class="flex flex-row gap-2 border border-black rounded-lg p-2">
		<label for="monologue" class="font-bold">Monologue</label>
		<textarea id="monologue" name="monologue" bind:value={monologue} />
	</div>

	<div class="flex flex-row gap-2 border border-black rounded-lg p-2">
		<label for="pullPhrase" class="font-bold">Pull Phrase</label>
		<input
			type="text"
			id="pullPhrase"
			name="pullPhrase"
			bind:value={pullPhrase}
		/>
	</div>
</div>
