import React from 'react';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import './Card.css';

function Card(props) {
    if (!props.shouldShow) return (
        <></>
    )
    return (
        <motion.div className='bg-second-lightest card'
        initial={{ scale:0}}
        animate={{ scale:.9 }}
        transition={{ ease: "easeOut", duration: 1 }}>
            <h1 className='my-font center mb-8 mt-5 headerSize'>{props.title}</h1>
            <h3 className='text-white center mb-8 bodySize'>{props.description}</h3>
        </motion.div>
    )
}

export default Card;