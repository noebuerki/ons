<script lang="ts">
	import { login, register } from '$lib/login-api';
	import { A, Button, Card, Helper, Input, Label, P } from 'flowbite-svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { User } from '../../models/user';
	import { goto } from '$app/navigation';
	import { isOk } from '$lib/util';

    let passwordDontMatch = false;
    let form: HTMLFormElement;

    let somethingWrong = false;
	let errorMessage: any;

    const user: Writable<User> = getContext('user');

    $: if ($user?.loggedIn === true) {
        goto('/');
    }

    async function registerTrigger() {
        const { email, username, password, password1 } = Object.fromEntries(new FormData(form));
        if (password !== password1) {
            passwordDontMatch = true;
            return;
        } else {
            passwordDontMatch = false;
        }
        try {
            const res = await register({ email, username, password });
			const data = res.data;
            
            if (isOk(res)) {
				await login({username, password});
                user.set({ id: data.id, email: data.email, username: data.username, loggedIn: true });
            } else {
				errorMessage = data;
                somethingWrong = true;
            }
        } catch (error) {
            somethingWrong = true;
        }

    }
</script>

<svelte:head>
	<title>ONS - Register</title>
</svelte:head>
<div class="flex h-full w-full">
	<Card class="m-auto">
		<form on:submit|preventDefault={registerTrigger} bind:this={form}>
			<div class="md:grid-cols mb-6 grid gap-6">
				<div>
					<Label for="email" class="mb-1">Email</Label>
					<Input type="email" id="email" placeholder="E-mail" name="email" required />
				</div>
				<div>
					<Label for="username" class="mb-1">Username</Label>
					<Input type="text" id="username" placeholder="Username" name="username" required />
				</div>
				<div>
					<Label for="password" class="mb-1">Password</Label>
					<Input type="password" id="password" placeholder="Password" name="password" required />
				</div>
				<div>
					<Label for="password1" class="mb-1">Password (verification)</Label>
					<Input type="password" id="password1" placeholder="Password" name="password1" required />
					{#if passwordDontMatch}
						<P class="text-red-500">Passwords don't match</P>
					{/if}
				</div>
				{#if somethingWrong}
					<Helper class='mt-2' color='red'>
						<span class="font-medium">Something went wrong!</span>
						{#if errorMessage}							
							{JSON.stringify(errorMessage)}
						{/if}
					</Helper>
			{/if}

			</div>
			<Button type="submit" class="w-full">Register</Button>
		</form>
		<P class="mt-6 text-center">
			Already have a account? <A href="/login">Login</A>
		</P>
	</Card>
</div>
