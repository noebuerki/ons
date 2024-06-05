<script lang="ts">
	import NameList from "$lib/components/NameList.svelte";
	import AddName from "$lib/components/AddName.svelte";
	import { Gender } from "../models/gender";
	import { Modal, Button} from "flowbite-svelte";
	import type { Name } from "../models/name";
	import { createName, deleteName } from "$lib/name-api";

    export let namelist: Array<Name> = [];
    
    let modalOpen = false;
    
    async function addName({detail}: any) {
        if (!detail) return;

        const res = await createName(detail);

        // if the axios call was successful, add the new name to the list
        if (res.status == 201) {
            modalOpen = false;
            namelist = [...namelist, res.data];
        }
    }
    async function removeName(name: Name) {
        const res = await deleteName(name.id);

        // if the axios call was successful, remove the name from the list

        if (res.status == 204) {
            namelist = namelist.filter(n => n.id != name.id);
        }
    }
</script>
<div class="grid grid-cols-3 gap-3">
    <!--male list-->
    <div class="mb-auto">
        <NameList title="👨 - Male" on:remove={({detail}) => removeName(detail)} list={namelist.filter(e => e.gender == Gender.MALE)}></NameList>
    </div>

    <!--unisex list-->
    <div class="mb-auto">
        <NameList title="🧒 - Unisex" on:remove={({detail}) => removeName(detail)} list={namelist.filter(e => e.gender == Gender.UNISEX)}></NameList>
    </div>

    <!--female list-->
    <div class="mb-auto">
        <NameList title="👩 - Female" on:remove={({detail}) => removeName(detail)} list={namelist.filter(e => e.gender == Gender.FEMALE)}></NameList>
    </div>
</div>
<Modal bind:open={modalOpen} title="Add name">
    <AddName on:submit={addName} names={namelist.map(n => n.name)}></AddName>
</Modal>
<Button class="absolute end-6 bottom-6 aspect-square" on:click={() => (modalOpen = true)} pill={true}>
    +
</Button>