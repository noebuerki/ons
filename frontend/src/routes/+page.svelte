<script lang="ts">
	import type { Writable } from "svelte/store";
	import type { User } from "../models/user";
	import { getContext, onMount } from "svelte";
	import { goto } from "$app/navigation";
	import Dashboard from "./Dashboard.svelte";
	import { getNames } from "$lib/name-api";
	import { names } from "../stores/names";

    const user: Writable<User> = getContext("user");
    
    $: if($user && $user.loggedIn === false) {
        goto("/login");
    }

    onMount(async () => {
        const namesResponse = await getNames();
        
        names.set(namesResponse.data);
    });
</script>
<svelte:head>
    <title>ONS - Dashboard</title>
</svelte:head>

{#if $user && $user.loggedIn}
    <Dashboard namelist={$names} />
{/if}
