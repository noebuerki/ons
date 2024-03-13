<script lang="ts">
	import { onMount } from "svelte";
    import { goto } from "$app/navigation"

    onMount (async () => {
        await fetch('/api/logout');
        await goto('/');
    });
</script>