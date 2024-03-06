<script>
    import Header from "$lib/Header.svelte";
    import "../app.pcss";
</script>
<div class="h-screen grid my-body">
    <Header>
    </Header>
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