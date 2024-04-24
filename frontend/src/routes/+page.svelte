<script lang="ts">
	import type { Writable } from "svelte/store";
	import type { User } from "../models/user";
	import { getContext, onMount } from "svelte";
	import { goto } from "$app/navigation";
	import Dashboard from "$lib/dashboard/Dashboard.svelte";

    const user: Writable<User> = getContext("user");
    
    onMount(() => {
        if(!$user.loggedIn) {
            goto("/login");
        }
    });
</script>

<div>
    <Dashboard namelist={[]}></Dashboard>
</div>