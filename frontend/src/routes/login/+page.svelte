<script lang="ts">
	import { A, Button, Card, Input, Label, P } from 'flowbite-svelte';
	import type { LayoutData } from '../$types';
</script>

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
            </div>
            <Button type="submit" class="w-full">Login</Button>
        </form>
        <P class="mt-6 text-center">
            Don't have an account? <A href="/register" class="btn btn-primary">Register</A>
        </P>
    </Card>
</div>
