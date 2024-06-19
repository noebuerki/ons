<script lang="ts">
    import { Li, List, P, Hr, Heading, Card, SpeedDial, Listgroup, ListgroupItem, Button } from "flowbite-svelte";
	import { createEventDispatcher } from "svelte";
	import type { Name } from "../../models/name";
    import moreIcon from '$lib/assets/more.svg?raw';

    export let title = 'Name List';
    export let list: Array<Name> = [];

    const dispatch = createEventDispatcher();

    function remove(name: Name) {
        dispatch('remove', name);
    }

    function edit(name: Name) {
        dispatch('edit', name);
    }
</script>
<Card size="none">
    <Heading tag="h5" class="text-center">{title}</Heading>

    <Hr />
    <List list="none">
        {#each list as item}
            <Li class="py-1 font-normal">
                <Card padding="none">
                    <div class="flex place-content-between items-center py-1 px-2">
                        <P>{item.name}</P>
                        <SpeedDial defaultClass="" tooltip="none" placement="top-end">
                            <Button slot="button" class="!p-2" pill={true}>
                                <div class="w-6 h-6">
                                    {@html moreIcon}
                                </div>
                            </Button>
                            <Listgroup class="divide-none" active>
                                <ListgroupItem class="flex gap-2 md:px-5" on:click={() => remove(item)}>
                                    Delete
                                </ListgroupItem>
                                <ListgroupItem class="flex gap-2 md:px-5" on:click={() => edit(item)}>
                                    Edit
                                </ListgroupItem>
                            </Listgroup>
                        </SpeedDial>
                    </div>
                </Card>
            </Li>
        {/each}
    </List>
</Card>