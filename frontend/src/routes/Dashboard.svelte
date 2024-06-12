<script lang="ts">
	import NameList from "$lib/components/NameList.svelte";
	import AddName from "$lib/components/AddName.svelte";
	import { Gender } from "../models/gender";
	import { Modal, Button} from "flowbite-svelte";
	import type { Name } from "../models/name";
	import { createName, deleteName, updateName } from "$lib/name-api";
	import EditName from "$lib/components/EditName.svelte";

    export let namelist: Array<Name> = [];
    
    let modalOpen = false;
    let editModalOpen = false;

    let currentEditName: Name | null = null;
    
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

    async function editName(name: Name) {
        editModalOpen = true;
        currentEditName = name;
    }

    async function saveName(name: Partial<Name>) {
        editModalOpen = false;

        try {
            if (!currentEditName) {
                return;
            }

            await updateName(currentEditName.id, name);
            if (name.name) currentEditName.name = name.name;
            if (name.gender) currentEditName.gender = name.gender;
            
            namelist = [...namelist.filter((element) => element.id !== currentEditName?.id), currentEditName];
        } catch {
            alert('Failed to update name');
        }

        currentEditName = null;
    }

    function cancelEdit() {
        editModalOpen = false;
        currentEditName = null;
    }
</script>
<div class="grid grid-cols-3 gap-3">
    <!--male list-->
    <div class="mb-auto">
        <NameList
            title="👨 - Male"
            list={namelist.filter(e => e.gender == Gender.MALE)}
            on:remove={({detail}) => removeName(detail)}
            on:edit={({detail}) => editName(detail)}>
        </NameList>
    </div>

    <!--unisex list-->
    <div class="mb-auto">
        <NameList
            title="🧒 - Unisex"
            list={namelist.filter(e => e.gender == Gender.UNISEX)}
            on:remove={({detail}) => removeName(detail)}
            on:edit={({detail}) => editName(detail)}>
        </NameList>
    </div>

    <!--female list-->
    <div class="mb-auto">
        <NameList
            title="👩 - Female"
            list={namelist.filter(e => e.gender == Gender.FEMALE)}
            on:remove={({detail}) => removeName(detail)}
            on:edit={({detail}) => editName(detail)}>
        </NameList>
    </div>
</div>
<Modal bind:open={modalOpen} title="Add name">
    <AddName on:submit={addName} names={namelist.map(n => n.name)}></AddName>
</Modal>
<Modal bind:open={editModalOpen} title="Edit name">
    <EditName on:submit={({detail}) => saveName(detail)} on:cancel={cancelEdit} name={currentEditName} names={namelist.map(n => n.name)}></EditName>
</Modal>

<Button class="absolute end-6 bottom-6 aspect-square" on:click={() => (modalOpen = true)} pill={true}>
    +
</Button>