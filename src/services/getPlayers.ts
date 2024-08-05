import { type Player, type Attributes } from '../types/players'
const API_AUTH = import.meta.env.PUBLIC_AUTH;
export const getPlayers = async() => { 
    let response = await fetch(
        'https://ms-strapi-production.up.railway.app/api/players',
        {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': API_AUTH,
        }
        }
    )
    let data = await response.json();
    data = data.data as Player[];
    data.sort((a: Player,b: Player) => (a.attributes.name < b.attributes.name ? -1 : 1))
    console.log(data);
    return data;
}
