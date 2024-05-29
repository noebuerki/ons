<script lang="ts">
	import { Button, Card, Input, P } from "flowbite-svelte";
    import { axios } from "$lib";
    let form: HTMLFormElement;

    async function handleSubmit() {
        const formData = new FormData(form);
        const email = formData.get("email") as string;
        try {
            await axios.post("/password_reset/", { email });
            alert("Password reset link sent to your email");
        } catch (error) {
            alert("An error occurred. Please try again later.");
        }
    }
    
</script>
<div class="container flex">
    <div class="mx-auto container">
        <h1 class="text-3xl font-semibold text-center mt-8 inline-block"> Password</h1>
        <Card>
            <P>Enter your email address and we will send you a link to reset your password.</P>
            <form class="center mt-4" bind:this={form} on:submit|preventDefault={handleSubmit}>
                <Input class="mb-4" type="email" label="Email" name="email" />
                <Button class="ml-auto" type="submit">Submit</Button>
            </form>
        </Card>
    </div>
</div>