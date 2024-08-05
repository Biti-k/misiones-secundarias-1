import { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import { getPlayers } from '../services/getPlayers';
import { type Player } from '../types/players';
import { Icon } from "@iconify/react/dist/iconify.js"

const Cards = () => {
   const [users, setUsers] = useState<Player[]>([]);
   const [error, setError] = useState('');

   const players = async() => {
      let players = await getPlayers();
      setUsers(players);
   }

   useEffect(() => {
      players();
   }, []);

   return(
   <ul role="list" className="grid gap-2 grid-cols-1 md:grid-cols-2 relative w-full justify-items-center">
      {users && users.length > 0 ? (
         users.map(user => (
            <Card 
                  key={user.id} 
                  href="https://www.google.com" 
                  title={user.attributes.name} 
                  body={user.attributes.points} 
                  idUsuario={user.id}
                  emoji={user.attributes.emoji}
            />
         ))
      ) : (
         <div className='flex justify-center text-2xl animate-bounce w-full absolute'><p className='text-center w-full'>Cargando...</p></div>
      )}
   </ul>
   )
}
export default Cards;