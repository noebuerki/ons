<script lang="ts">
	import { Button, Helper, Input, Label, Select } from 'flowbite-svelte';
	import { Gender } from '../../models/gender';
	import { createEventDispatcher } from 'svelte';

    export let names: Array<string>;
	const dispatch = createEventDispatcher();

	const values = Object.entries(Gender).map((v) => ({ value: v[1], name: v[0] }));
    let form: HTMLFormElement;
    let isValidName = true;

    

    function submit() {
        const params = Object.fromEntries(new FormData(form)) as any;

        if (names.includes(params.name)) {
            isValidName = false;
            return;
        }
		
        dispatch('submit', params);
    }

</script>

<form on:submit|preventDefault={submit} bind:this={form}>
	<!--Formular with name input and gender-->
	<div class="md:grid-cols mb-6 grid gap-6">
		<div>
			<Label for="name-input" class="mb-2">Name</Label>
			<Input type="text" name="name" id="name-input" placeholder="John" required />
            {#if !isValidName}
                <Helper class="mt-2" color="red">
                    Name already exists
                </Helper>
            {/if}
		</div>
		<div>
			<Select id="countries" class="mt-2" value={Gender.UNISEX} name="gender">
				{#each values as { value, name }}
					<option {value}>{name}</option>
				{/each}
			</Select>
		</div>
        <Button type="submit" class="w-full">Add</Button>
	</div>

</form>
