<script lang="ts">
	import { register } from '$lib/user-manager';
	import { A, Button, Card, Input, Label, P } from 'flowbite-svelte';

    let passwordDontMatch = false;
    let form: HTMLFormElement;
    function registerTrigger() {
        const { username, password, password1 } = Object.fromEntries(new FormData(form));
        if (password !== password1) {
            passwordDontMatch = true;
            return;
        } else {
            passwordDontMatch = false;
        }

        register({ username, password })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Invalid input');
                }
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }
</script>

<svelte:head>
    <title>ONS - Register</title>
</svelte:head>
<div class="flex w-full h-full">
    <Card class="m-auto">
        <form on:submit|preventDefault={registerTrigger} bind:this={form}>
            <div class="md:grid-cols mb-6 grid gap-6">
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
            </div>
            <Button type="submit" class="w-full">Register</Button>
        </form>
        <P class="mt-6 text-center">
            Already have a account? <A href="/login">Login</A>
        </P>
    </Card>
</div>
