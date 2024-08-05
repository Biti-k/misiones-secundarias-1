import '../styles/card.css';
import EmojiChooser from './EmojiChooser';
import { updatePoints } from '../services/updatePoints';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
const Card = ({href, title, body, idUsuario, emoji}) => {
   const [puntos, setPuntos] = useState(body);
   const handleRestarPuntos = () => {
      if(puntos - 1 >= 0){
         setPuntos(puntos - 1);
         updatePoints(puntos - 1,idUsuario)
      }
   }
   const handleSumarPuntos = () => {
      setPuntos(puntos + 1);
      updatePoints(puntos + 1, idUsuario)
   }
	return(
      <li className="link-card w-full sm:h-auto">
         <a className='flex justify-between flex-wrap w-full'>
            <div className='flex flex-col justify-between'>
               <h2>
                  {title}
                  <span> &rarr;</span>
               </h2>
               <div className='flex justify-between select-none'>
                  {
                  <div className='bg-gradient-to-t from-purple-950 to-purple-900 border border-purple-400 p-2 rounded-md w-[100%] flex flex-wrap justify-center gap-2'>
                     <div>
                        Puntos:
                     </div>
                     <div className='flex gap-2'>
                        <button onClick={handleRestarPuntos}><Icon icon="memory:minus-circle" className='text-purple-400 hover:text-purple-100 text-2xl'/></button>
                        {puntos}
                        <button onClick={handleSumarPuntos}><Icon icon="memory:plus-circle" className='text-purple-400 hover:text-purple-100 text-2xl'/></button>
                     </div>
                  </div>
                  }
               </div>
            </div>
            <div className='flex justify-end'>
               <EmojiChooser usuario={idUsuario} emoji= {emoji} />
            </div>
         </a>
      </li>
	)
}
export default Card;

