<script lang="ts">
    import { Li, List, P, Hr, Heading, Card, Button } from "flowbite-svelte";
	import { createEventDispatcher } from "svelte";
	import type { Name } from "../../models/name";

    export let title = 'Name List';
    export let list: Array<Name> = [];

    const dispatch = createEventDispatcher();

    function remove(name: Name) {
        dispatch('remove', name);
    }
</script>
<Card size="none">
    <Heading tag="h5" class="text-center">{title}</Heading>

    <Hr />
    <List list="none">
        {#each list as item}
            <Li class="py-1 font-normal">
                <Card padding="none">
                    <div class="flex place-content-between items-center p-1">
                        <P>{item.name}</P><Button on:click={() => remove(item)} size="xs">remove</Button>
                    </div>
                </Card>
            </Li>
        {/each}
    </List>
</Card>