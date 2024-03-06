<script lang="ts">
	import { A, Button, Card, Helper, Input, Label, P } from 'flowbite-svelte';

    let wrongPassword = false;
    let form: HTMLFormElement;

    function login(ev: any) {
        const { username, password } = Object.fromEntries(new FormData(form));
        wrongPassword = true;
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            if(res.ok) {
                return res.json()
            } else {
                throw new Error('Invalid credentials')
            }
        }).then(data => {
            console.log(data)
        }).catch(err => {
            console.error(err)
        });
    }
</script>

<svelte:head>
    <title>ONS - Login</title>
</svelte:head>

<div class="flex w-full h-full">
    <Card class="m-auto">
        <form on:submit={login} bind:this={form}>
            <div class="md:grid-cols mb-6 grid gap-6">
                <div>
                    <Label for="username" class="mb-1">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="Username" required />
                </div>
                <div>
                    <Label for="password" color={wrongPassword ? 'red' : 'gray'} class="mb-1">Password</Label>
                    <Input type="password" name="password" color={wrongPassword ? 'red' : 'base'} id="password"  placeholder="Password" required />
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
