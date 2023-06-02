import { useState } from 'react';

export default function TwitterCard({ username }){
  const [following, setFollowing] = useState(false)

  return <>
    <div>
      <img src={import.meta.env.VITE_URL+username} alt={`@${username}`} />
      <div>
        <strong>{`@${username}`}</strong>
        <span>{`@${username ?? 'Sin nombre'}`}</span>
      </div>
      <button onClick={setFollowing(!following)} >
        
      </button>
    </div>
  </>
}