<script>
    import { NavBrand, NavHamburger, NavLi, NavUl, Navbar } from "flowbite-svelte";
    import "../app.pcss";
</script>
<div class="h-screen grid my-body">
    <Navbar let:NavContainer color="primary">
        <NavContainer class="border px-5 py-2 rounded-lg bg-white dark:bg-gray-600">
            <NavBrand href="/">
                <span class="self-center whitespace-nowrap text-xl font-semibold">Flowbite</span>
            </NavBrand>
            <NavHamburger />
            <NavUl>
                <NavLi href="/">Home</NavLi>
                <NavLi href="/about">About</NavLi>
            </NavUl>
        </NavContainer>
    </Navbar>
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