<script lang="ts">
	import { browser } from '$app/environment';
	import { goto, replaceState } from '$app/navigation';
	import type { LayoutData } from './$types';

    export let data: LayoutData;
    
    $:if(browser) {
        if(data.user.loggedIn) {
            goto('/dashboard');
        } else {
            goto('/login');
        }
    }
</script>
