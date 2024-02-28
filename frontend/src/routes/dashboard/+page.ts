export async function load({parent}) {
    const parentData = await parent();

    const nameList = ["name1", "name2", "name3"];
    return {...parentData, nameList: nameList}
}