<script lang="ts">
	import { login } from '$lib/login-controls';
	import { A, Button, Card, Helper, Input, Label, P } from 'flowbite-svelte';
	import type { User } from '../../models/user';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { isOk } from '$lib/util';

	let wrongPassword = false;
	let form: HTMLFormElement;

	const user: Writable<User> = getContext('user');

	$: if ($user?.loggedIn === true) {
		goto('/');
	}

	async function loginTrigger(ev: any) {
		const { username, password } = Object.fromEntries(new FormData(form));
		try {
			const response = await login({ username, password });

			if (isOk(response)) {
				const data = response.data;
				user.set({ email: data.email, username: data.username, loggedIn: true });
			} else {
		        wrongPassword = true;
            }
		} catch (error) {
		    wrongPassword = true;
		}
	}
</script>

<svelte:head>
	<title>ONS - Login</title>
</svelte:head>

<div class="flex h-full w-full">
	<Card class="m-auto">
		<form on:submit|preventDefault={loginTrigger} bind:this={form}>
			<div class="md:grid-cols mb-6 grid gap-6">
				<div>
					<Label for="username" class="mb-1">Username</Label>
					<Input type="text" name="username" id="username" placeholder="Username" required />
				</div>
				<div>
					<Label for="password" color={wrongPassword ? 'red' : 'gray'} class="mb-1">Password</Label>
					<Input
						type="password"
						name="password"
						color={wrongPassword ? 'red' : 'base'}
						id="password"
						placeholder="Password"
						required
					/>
					{#if wrongPassword}
						<Helper class="mt-2" color="red">
							<span class="font-medium">Oh, snapp!</span>
							Wrong password, try again.
						</Helper>
					{/if}
				</div>
			</div>
			<Button type="submit" class="w-full">Login</Button>
		</form>
		<P class="mt-6 text-center">
			Don't have an account? <A href="/register">Register</A>
		</P>
	</Card>
</div>
