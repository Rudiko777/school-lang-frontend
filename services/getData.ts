export interface IData{
    id: number
}


export async function getDataWithJson(id: number): Promise<IData>{
    const response = await fetch(`http://localhost:8080/data/${id}`, {cache: 'force-cache'})
    return response.json();
}

//
// export async function getAllPosts(): Promise<Post[]>{
//     const response = await fetch(`${API_URL}/posts`, {cache: 'force-cache'})
//     return await response.json()
// }