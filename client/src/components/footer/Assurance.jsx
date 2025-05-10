import React from 'react'
import { MdCurrencyExchange } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import './footerStyle.css'

const Assurance = () => {
    const assuraceData = [
        {
            id:1,
            title:'Easy Exchange',
            icon: <MdCurrencyExchange />
        },
        {
            id:2,
            title:'100% Handpicked',
            icon: <LuHeartHandshake />
        },
        {
            id:3,
            title:'Assured Queality',
            icon: <VscWorkspaceTrusted />
        }
    ]
  return (
    <div className='assurance_container'>
        {assuraceData.map((a) => (
            <div className="assurance_content" key={a.id}>
                <span>{a.icon}</span>
                <p>{a.title}</p>
            </div>
        ))}
    </div>
  )
}

export default Assurance