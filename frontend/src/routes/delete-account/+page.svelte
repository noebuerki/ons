<script lang="ts">
	import { getContext } from "svelte";
	import { get, type Writable } from "svelte/store";
	import type { User } from "../../models/user";
	import { goto } from "$app/navigation";
	import { deleteAccount } from "$lib/login-api";
	import { Button, P } from "flowbite-svelte";

    const user: Writable<User> = getContext('user');

    async function onDeleteClicked() {
        const userId = get(user).id;
        if (userId) {
            await deleteAccount(userId);
            user.set({ id: null, email: null, username: null, loggedIn: false});
            goto('/');
        }
    }
</script>
<div class="flex flex-col place-content-center  gap-2">
    <P>Are you sure you want to delete your account</P>

    <Button color="red" on:click={onDeleteClicked}>Delete my account</Button>
</div>