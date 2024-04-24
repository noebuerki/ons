<script>

    import Header from "$lib/Header.svelte";
	import { getCurrentUser } from "$lib/user-manager";
	import { writable } from "svelte/store";
    import "../app.pcss";
	import { setContext } from "svelte";

	const user = writable();
    const currentUser = getCurrentUser();

	$: user.set(currentUser);
	
	// ...and add it to the context for child components to access
	setContext('user', user);
</script>
<div class="h-screen grid my-body">
    <Header></Header>
    <main class="w-full h-full">
        <slot></slot>
    </main>
</div>
<style>
    main {
        padding: 2rem;
        max-width: 1400px;
        height: 100%;
    }
    .my-body {
        grid-template-rows: auto 1fr;
    }
</style>