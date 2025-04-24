import React, { useState } from 'react'
import womenPhoto from '../../assets/testimonials/woman.png'
import menPhoto from '../../assets/testimonials/man.png'
import boyPhoto from '../../assets/testimonials/boy.png'
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import TestimonialsCard from '../testimonals/TestimonialsCard';
import './TestimonialStyle.css'

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const prevSlide = () => setIndex(index === 0 ? testimonials.length - 1 : index - 1)
    const nextSlide = () => setIndex(index === testimonials.length - 1 ? 0 : index + 1)
    const testimonials = [
        {
            name: "Emily Rodriguez",
            image: womenPhoto,
            text: "Shopping here has been a game-changer for me. The interface is seamless, delivery was super quick, and customer support was beyond helpful. I’ve recommended this platform to all my friends and family, and they all love it too. It’s rare to find such a reliable and consistent e-commerce experience these days.",
            title: "Customer",
        },
        {
            name: "James Thompson",
            image: menPhoto,
            text: "From browsing to checkout, everything just works flawlessly. I was particularly impressed with the product tracking and easy return process. The variety and deals they offer are unmatched. This is now my go-to online store for pretty much everything!",
            title: "Customer",
        },
        {
            name: "Priya Patel",
            image: boyPhoto,
            text: "I’ve been using this app for over a year now and every purchase has been smooth and satisfying. Their seasonal discounts and membership perks are fantastic, and I appreciate how transparent the reviews and product details are. Highly recommended for smart shoppers!",
            title: "Customer",
        },
    ];
    return (
        <div className='testimonials__container'>
            <div className="testimonials_content">
                <div className="heading">
                    <h2>Testimonials</h2>
                </div>

                <div className="testimonials_all">
                    <button className="test_btn left" onClick={prevSlide}><HiChevronLeft /></button>
                    <div className="testimonials_slide">
                        {testimonials.map((t, i) => (

                            <TestimonialsCard
                                key={i}
                                image={t.image}
                                name={t.name}
                                text={t.text}
                                title={t.title}
                                isActive={i === index}
                            />
                        ))}
                    </div>
                    <button className="test_btn right" onClick={nextSlide}><HiChevronRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Testimonials