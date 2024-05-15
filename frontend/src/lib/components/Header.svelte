<script lang="ts">
    import { DarkMode, NavBrand, NavHamburger, NavLi, NavUl, Navbar } from "flowbite-svelte";
    import logo from '$lib/assets/logo.svg?raw';
	import { getContext } from "svelte";
	import type { User } from "../../models/user";
	import type { Writable } from "svelte/store";

    const user: Writable<User> = getContext('user');
</script>
<Navbar let:NavContainer color="primary" >
    <NavContainer class="border px-5 py-2 rounded-lg bg-white dark:bg-gray-600">
        <NavBrand href="/">
            {#if logo}
                <span class="h-6 w-6 mr-4 logo text-inherit">
                    {@html logo}
                </span>
            {/if}
            <span class="self-center whitespace-nowrap text-xl font-semibold">Online Name Server</span>
        </NavBrand>
        <div class="flex">
            <DarkMode class="my-auto" />
            <NavHamburger />
            {#if $user && $user.loggedIn}
                <NavUl>
                    <NavLi href="/dashboard">Dashboard</NavLi>
                    <NavLi href="/logout">Logout</NavLi>
                </NavUl>
            {/if}
        </div>
    </NavContainer>
</Navbar>

<style lang="postcss">
    .logo :global(svg) {
        @apply fill-current;
    }
</style>