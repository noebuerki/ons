<script lang="ts">
	import type { PageData } from "./$types";
	import NameList from "$lib/NameList.svelte";
	import { Gender } from "../../types/gender";

    export let data: PageData;

</script>
<div class="grid grid-cols-3 gap-3">
    <!--male list-->
    <div class="mb-auto">
        <NameList title="👨 - Male" list={data.nameList.filter(e => e.gender == Gender.MALE).map(e => e.name)}></NameList>
    </div>

    <!--unisex list-->
    <div class="mb-auto">
        <NameList title="Unisex" list={data.nameList.filter(e => e.gender == Gender.UNISEX).map(e => e.name)}></NameList>
    </div>

    <!--female list-->
    <div class="mb-auto">
        <NameList title="👩 - Female" list={data.nameList.filter(e => e.gender == Gender.FEMALE).map(e => e.name)}></NameList>
    </div>
</div>