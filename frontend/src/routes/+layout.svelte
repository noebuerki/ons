<script lang="ts">
    import Header from "$lib/components/Header.svelte";
	import { getCurrentUser } from "$lib/login-api";
	import { writable } from "svelte/store";
    import "../app.pcss";
	import { onMount, setContext } from "svelte";
	import logo from '$lib/assets/logo.svg';

	const user = writable<any>(null);
    onMount(async () => {
        const currentUser = await getCurrentUser();

        user.set(currentUser);
    });
	
	// ...and add it to the context for child components to access
	setContext('user', user);
</script>
<svelte:head>
    <link rel="icon" href="{logo}" />
</svelte:head>
<div class="h-screen grid my-body bg-white dark:bg-gray-800">
    <Header></Header>
    <main class="w-full h-full">
        <slot></slot>
    </main>
</div>
<style>
    main {
        padding: 2rem;
        max-width: 1400px;
        margin: 0 auto;
        height: 100%;
    }
    .my-body {
        grid-template-rows: auto 1fr;
    }
</style>