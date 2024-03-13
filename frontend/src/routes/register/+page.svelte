<script lang="ts">
	import { A, Button, Card, Input, Label, P } from 'flowbite-svelte';

    function register() {
        
    }
</script>

<svelte:head>
    <title>ONS - Register</title>
</svelte:head>
<div class="flex w-full h-full">
    <Card class="m-auto">
        <form>
            <div class="md:grid-cols mb-6 grid gap-6">
                <div>
                    <Label for="username" class="mb-1">Username</Label>
                    <Input type="text" id="username" placeholder="Username" required />
                </div>
                <div>
                    <Label for="password" class="mb-1">Password</Label>
                    <Input type="password" id="password" placeholder="Password" required />
                </div>
                <div>
                    <Label for="password1" class="mb-1">Password (verification)</Label>
                    <Input type="password" id="password1" placeholder="Password" required />
                </div>
            </div>
            <Button type="submit" class="w-full" on:click={register}>Register</Button>
        </form>
        <P class="mt-6 text-center">
            Already have a account? <A href="/login">Login</A>
        </P>
    </Card>
</div>
