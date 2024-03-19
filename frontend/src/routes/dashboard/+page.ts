import { Gender } from '../../types/gender.js';
import type { Name } from '../../types/name.js';

export async function load({parent}) {
    const parentData = await parent();

    const nameList: Array<Name> = [
        {id: 1, name: 'John', gender: Gender.MALE},
        {id: 2, name: 'Marie', gender: Gender.FEMALE},
        {id: 3, name: 'Joel', gender: Gender.UNISEX},
    ];
    
    return {...parentData, nameList: nameList}
}