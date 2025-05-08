import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'motion/react'

const Speech = () => {
    return (
        <motion.div animate={{opacity:[0,1]}} transition={{duration:1}} className='bubbleContainer'>
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        1000,
                        'Akash This side a MERN stack developer.',
                        1000,
                        'created some real world projects.',
                        1000,
                        'you can go through my projects.',
                        1000
                    ]}
                    wrapper="span"
                    speed={40}
                    deletionSpeed={80}
                    repeat={Infinity}
                />
            </div>
            <img src="man.png" alt="" />
        </motion.div>
    )
}

export default Speech;
