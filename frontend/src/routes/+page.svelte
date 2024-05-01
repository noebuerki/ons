<script lang="ts">
	import type { Writable } from "svelte/store";
	import type { User } from "../models/user";
	import { getContext, onMount } from "svelte";
	import { goto } from "$app/navigation";
	import Dashboard from "./Dashboard.svelte";

    const user: Writable<User> = getContext("user");
    
    $: if($user && $user.loggedIn === false) {
        console.log("User is not logged in");
        goto("/login");
    }
</script>
<svelte:head>
    <title>ONS</title>
</svelte:head>
<div>
    <Dashboard namelist={[]}></Dashboard>
</div>