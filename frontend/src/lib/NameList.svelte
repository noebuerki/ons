<script lang="ts">
    import { Li, List, P, Hr, Heading, Card, Button } from "flowbite-svelte";

    export let title = 'Name List';
    export let list = ['John', 'Doe', 'Jane', 'Doe'];
</script>
<Card>
    <Heading tag="h5" class="text-center">{title}</Heading>

    <Hr />
    <List list="none">
        {#each list as item}
            <Li class="py-1 font-normal">
                <Card padding="none">
                    <div class="flex place-content-between items-center p-1">
                        <P>{item}</P><Button on size="xs">remove</Button>
                    </div>
                </Card>
            </Li>
        {/each}
    </List>
</Card>