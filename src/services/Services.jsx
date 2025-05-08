import React, { useRef, useState } from 'react';
import Counter from './Counter';
import './services.css';
import { motion, useInView } from 'motion/react';
import ComputerModelContainer from './computer/ComputerModelContainer'
import ConsoleModelContainer from './fullstack/FullStackModelContainer'
import AiModelContainer from './ai/aiModelContainer';
const textVariants = {
    initial: {
        x: -100,
        y: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

const listVariants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        },
    },
};
const services = [
    {
        id: 1,
        img: "/service1.png",
        title: "Frontend",
        counter: 3,
    },
    {
        id: 2,
        img: "/service2.png",
        title: "AI Projects",
        counter: 2,
    },
    {
        id: 3,
        img: "/service3.png",
        title: "Full Stack",
        counter: 3,
    },
];
const Services = () => {
    const [currentServiceId,setCurrentServiceId]=useState(1);
    const ref=useRef();
    const isView=useInView(ref,{margin:"-200px"})
    return (
        <div className='services' ref={ref}>
            <div className="sSection left">
                <motion.h1 variants={textVariants}
                animate={isView?"animate":"initial"}
                className='sTitle'>How do I help?</motion.h1>
                <motion.div variants={listVariants} animate={isView?"animate":"initial"} className="serviceList">
                    {services.map(service => (
                        <motion.div className="service" key={service.id} onClick={()=>setCurrentServiceId(service.id)}>
                            <div className="serviceIcon">
                                <img src={service.img} alt="" />
                            </div>
                            <div className="serviceInfo">
                                <h2>{service.title}</h2>
                                <h3>{service.counter} Projects</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="counterList">
                    <Counter from={0} to={8} text="Projects Completed" />
                </div>
            </div>
            <div className="sSection right">
                {currentServiceId===1? (<ComputerModelContainer/>) : currentServiceId===2?(<AiModelContainer/>) :(<ConsoleModelContainer/>)}
            </div>

        </div>
    )
}

export default Services;
