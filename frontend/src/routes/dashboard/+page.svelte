<script lang="ts">
	import type { PageData } from "./$types";
	import NameList from "$lib/NameList.svelte";

    export let data: PageData;

</script>
<div class="grid grid-cols-3 gap-3">
    <!--male list-->
    <div class="mb-auto">
        <NameList title="👨 - Male" list={data.nameList}></NameList>
    </div>

    <!--unisex list-->
    <div class="mb-auto">
        <NameList title="" list={data.nameList}></NameList>
    </div>

    <!--female list-->
    <div class="mb-auto">
        <NameList title="👩 - Female" list={data.nameList}></NameList>
    </div>
</div>