import React from 'react'
import menPhoto from '../../assets/look/men.jpg'
import womenPhoto from '../../assets/look/women.jpg'
import childPhoto from '../../assets/look/child.jpg'
import LookSection from './LookSection'
import './lookStyle.css'

const Look = () => {
    const lookData = [
        {
            id: 1,
            title: 'Men',
            image: menPhoto
        },
        {
            id: 2,
            title: 'Women',
            image: womenPhoto
        },
        {
            id: 3,
            title: 'Children',
            image: childPhoto
        },
    ];


    return (
        <div className='look__container'>
            <div className="look_content">
                <h2>find your look</h2>
                <div className="look_all">
                    {lookData.map((look) => (
                        <LookSection
                            key={look.id}
                            title={look.title}
                            image={look.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Look