<script lang="ts">
	import NameList from "$lib/NameList.svelte";
	import { Gender } from "../../models/gender";
	import { Modal, Button} from "flowbite-svelte";
	import AddName from "./AddName.svelte";
	import type { Name } from "../../models/name";

    export let namelist: Array<Name> = [];
    
    let modalOpen = false;
    
    async function addName({detail}: any) {
        if (!detail) return;
        const res = await fetch('/api/names', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(detail)
        });
        if(res.ok || import.meta.env.MODE === 'development') {
            modalOpen = false;
            namelist = [...namelist, detail];
        }
    }
    async function removeName(name: string) {
        const res = await fetch('/api/names', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name})
        });
        if(res.ok || import.meta.env.MODE === 'development') {
            namelist = namelist.filter(e => e.name !== name);
        }
    }
</script>
<svelte:head>
    <title>Online Name Server</title>
</svelte:head>
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