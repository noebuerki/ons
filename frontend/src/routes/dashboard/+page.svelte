<script lang="ts">
	import type { PageData } from "./$types";
	import NameList from "$lib/NameList.svelte";
	import { Gender } from "../../types/gender";
	import { SpeedDial, Modal, SpeedDialButton, Button} from "flowbite-svelte";
	import AddName from "./AddName.svelte";

    export let data: PageData;
    
    let modalOpen = false;
    async function addName({detail}: any) {
        await fetch('/api/names', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(detail)
        });
    }
</script>
<svelte:head>
    <title>Online Name Server</title>
</svelte:head>
<div class="grid grid-cols-3 gap-3">
    <!--male list-->
    <div class="mb-auto">
        <NameList title="👨 - Male" list={data.nameList.filter(e => e.gender == Gender.MALE).map(e => e.name)}></NameList>
    </div>

    <!--unisex list-->
    <div class="mb-auto">
        <NameList title="🧒 - Unisex" list={data.nameList.filter(e => e.gender == Gender.UNISEX).map(e => e.name)}></NameList>
    </div>

    <!--female list-->
    <div class="mb-auto">
        <NameList title="👩 - Female" list={data.nameList.filter(e => e.gender == Gender.FEMALE).map(e => e.name)}></NameList>
    </div>
</div>
<Modal bind:open={modalOpen} title="Add name">
    <AddName on:submit={addName}></AddName>
</Modal>
<Button class="absolute end-6 bottom-6 aspect-square" on:click={() => (modalOpen = true)} pill={true}>
    +
</Button>