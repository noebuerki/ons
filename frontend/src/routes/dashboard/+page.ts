import { Gender } from '../../types/gender.js';
import type { Name } from '../../types/name.js';

export async function load({parent}) {
    const parentData = await parent();

    const nameList: Array<Name> = [
        {name: 'John', gender: Gender.MALE},
        {name: 'Marie', gender: Gender.FEMALE},
        {name: 'Joel', gender: Gender.UNISEX},
    ];
    
    return {...parentData, nameList: nameList}
}