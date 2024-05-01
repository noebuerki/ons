<script lang="ts">
    import { NavBrand, NavHamburger, NavLi, NavUl, Navbar } from "flowbite-svelte";
    import logo from '$lib/assets/logo.svg';
</script>
<Navbar let:NavContainer color="primary">
    <NavContainer class="border px-5 py-2 rounded-lg bg-white dark:bg-gray-600">
        <NavBrand href="/">
            <img alt="NJL-Logo" class="h-6 mx-2" src="{logo}" />
            <span class="self-center whitespace-nowrap text-xl font-semibold">Online Name Server</span>
        </NavBrand>
        <NavHamburger />
        <NavUl>
            <NavLi href="/">Dashboard</NavLi>
            <NavLi href="/logout">Logout</NavLi>
        </NavUl>
    </NavContainer>
</Navbar>