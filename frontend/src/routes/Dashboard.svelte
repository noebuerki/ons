<script lang="ts">
	import NameList from "$lib/components/NameList.svelte";
	import { Gender } from "../models/gender";
	import { Modal, Button} from "flowbite-svelte";
	import AddName from "../lib/components/AddName.svelte";
	import type { Name } from "../models/name";
	import { createName, deleteName } from "$lib/name-api";

    export let namelist: Array<Name> = [];
    
    let modalOpen = false;
    
    async function addName({detail}: any) {
        if (!detail) return;

        const res = await createName(detail);

        if(res.ok) {
            modalOpen = false;
            namelist = [...namelist, detail];
        }
    }
    async function removeName(name: Name) {
        const res = await deleteName(name.id);

        if(res.ok) {
            namelist = namelist.filter(e => e.id !== name.id);
        }
    }
</script>
<div class="grid grid-cols-3 gap-3">
    <!--male list-->
    <div class="mb-auto">
        <NameList title="👨 - Male" on:remove={({detail}) => removeName(detail)} list={namelist.filter(e => e.gender == Gender.MALE).map(e => e.name)}></NameList>
    </div>

    <!--unisex list-->
    <div class="mb-auto">
        <NameList title="🧒 - Unisex" on:remove={({detail}) => removeName(detail)} list={namelist.filter(e => e.gender == Gender.UNISEX).map(e => e.name)}></NameList>
    </div>

    <!--female list-->
    <div class="mb-auto">
        <NameList title="👩 - Female" on:remove={({detail}) => removeName(detail)} list={namelist.filter(e => e.gender == Gender.FEMALE).map(e => e.name)}></NameList>
    </div>
</div>
<Modal bind:open={modalOpen} title="Add name">
    <AddName on:submit={addName} names={namelist.map(n => n.name)}></AddName>
</Modal>
<Button class="absolute end-6 bottom-6 aspect-square" on:click={() => (modalOpen = true)} pill={true}>
    +
</Button>