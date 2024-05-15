<script lang="ts">
	import { getContext, onMount } from "svelte";
	import type { Writable } from "svelte/store";
	import type { User } from "../../models/user";
	import { goto } from "$app/navigation";
	import { logout } from "$lib/login-api";

    const user: Writable<User> = getContext('user');
        
    onMount(async () => {
        await logout();
        user.set({ email: null, username: null, loggedIn: false})
        goto('/');
    });
</script>