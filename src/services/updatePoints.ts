import { type Player, type Attributes } from '../types/players'
const API_AUTH = import.meta.env.PUBLIC_AUTH;
export const updatePoints = async(points:number, usuario:number) => { 
    let response = await fetch('https://ms-strapi-production.up.railway.app/api/players/'+usuario, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': API_AUTH
        },
        body: JSON.stringify({
          data: {
            points: points
          }
        })
    });
    let data = await response.json();
    return data;
}
