<script lang="ts">
	import { Button, Input, Label, Select } from 'flowbite-svelte';
	import { Gender } from '../../types/gender';

	const values = Object.entries(Gender).map((v) => ({ value: v[1], name: v[0] }));
</script>

<form>
	<!--Formular with name input and gender-->
	<div class="md:grid-cols mb-6 grid gap-6">
		<div>
			<Label for="name-input" class="mb-2">Name</Label>
			<Input type="text" id="name-input" placeholder="John" required />
		</div>
		<div>
			<Select id="countries" class="mt-2" value={Gender.UNISEX} placeholder="">
				{#each values as { value, name }}
					<option {value}>{name}</option>
				{/each}
			</Select>
		</div>
        <Button type="submit" class="w-full">Add</Button>
	</div>

</form>
