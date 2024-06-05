<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import type { User } from "../../models/user";
	import { goto } from "$app/navigation";
	import { deleteAccount } from "$lib/login-api";

    const user: Writable<User> = getContext('user');
        
    $: if ($user.id != null) {
        deleteAccount($user.id)
            .then(() => {
                user.set({ id: null, email: null, username: null, loggedIn: false})
                goto('/');
            })
    }
</script>