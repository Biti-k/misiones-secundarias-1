import { useState, useEffect } from 'react';
import classnames from 'classnames';
import axios from 'axios';
//get a value from .env file
const API_AUTH = import.meta.env.PUBLIC_AUTH;

const EmojiChooser = ({ usuario, emoji }) => {
   const [selectedEmoji, setSelectedEmoji] = useState(null);
   const [seleccionando, setSeleccionando] = useState(false);
   const emojis = ['🐵','🐒','🦍','🦧','🐶','🐕','🦮','🐕‍🦺','🐩','🐺','🦊','🦝','🐱','🐈','🐈‍⬛','🦁','🐯','🐅','🐆','🐴','🫎','🫏','🐎','🦄','🦓','🦌','🦬','🐮','🐂','🐃','🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦣','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇','🐿️','🦫','🦔','🦇','🐻','🐻‍❄️','🐨','🐼','🦥','🦦','🦨','🦘','🦡'];
   const [emojiSet, setEmojiSet] = useState(false)
   const handleEmojiClick = (emoji) => {
      setSelectedEmoji(emoji);
      onEmojiSelect(emoji);
   };

   useEffect(() => {
      if(emoji == null){
         setSelectedEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
      }else{
         setSelectedEmoji(emoji);
         setEmojiSet(true);
      }
   }, [])
   
   const handleClick = (e) => {
      stopPropagation(e);
      setSeleccionando(!seleccionando);
   }

   const stopPropagation = (e) => {
      e.stopPropagation();
   }

   const escogerEmoji = async(emojiA) => {
      setSelectedEmoji(emojiA);
      setSeleccionando(false);
      setEmojiSet(true);
      const response = await fetch('https://ms-strapi-production.up.railway.app/api/players/'+usuario, {
         method: 'PUT',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': API_AUTH
         },
         body: JSON.stringify({
           data: {
             emoji: emojiA
           }
         })
       });
     
       const data = await response.json();
       console.log(data);
   }

   return (      
      <div className='group p-3 relative bg-gray-700 border-gray-200 border rounded-md w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] transition-transform cursor-pointer select-none' onClick={handleClick}>
         {/* Display the selected emoji */}
         <p className={classnames("text-4xl text-center text-shadow-md", {'animate-pulse': !emojiSet})}>
            {selectedEmoji}
         </p>
         <div onClick={stopPropagation} className={classnames('scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-600 absolute top-[100%] left-[-50%] w-[250px] sm:[w-250px] p-2 translate-x-[-50%] h-[400px] overflow-y-auto grid grid-cols-2 gap-1 text-4xl bg-slate-600 rounded-md transition duration-500 z-50', {'opacity-100': seleccionando, 'opacity-0': !seleccionando, 'pointer-events-none':!seleccionando})}>
            {
               emojis.map(emojiA => (
                  <div key={emojiA} onClick={() => escogerEmoji(emojiA)} className='bg-slate-500 rounded-md flex items-center justify-center h-[80px] hover:border-2 border-blue-300 transition duration-500'>
                     <p className='text-center'>{emojiA}</p>
                  </div>
               ))
            }

         </div>
      </div>
   );
};

export default EmojiChooser;


