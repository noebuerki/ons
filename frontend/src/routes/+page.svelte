<script lang="ts">
	import { browser } from '$app/environment';
	import { replaceState } from '$app/navigation';
	import type { LayoutData } from './$types';

    export let data: LayoutData;
    
    if(browser) {
        if(data.user.loggedIn) {
            replaceState('/dashboard', { replace: true });
        } else {
            replaceState('/login', { replace: true });
        }
    }
</script>
