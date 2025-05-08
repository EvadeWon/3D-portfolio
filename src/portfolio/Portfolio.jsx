import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import "./portfolio.css";

const items = [
  {
    id: 1,
    img: "/p5.png",
    title: "3D Portfolio Website",
    desc: "A visually engaging 3D portfolio website showcasing my skills, projects, and experience as a front-end developer. Built with modern web technologies to deliver an interactive and immersive user experience.",
    link: "/",
  },
  {
    id: 5,
    img: "/p1.png",
    title: "Full Stack LMS Application",
    desc: "A complete Learning Management System (LMS) website designed to manage online courses, track student progress, and facilitate interactive learning. Features include user authentication, course creation, video lectures, and progress tracking for both students and instructors.",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.png",
    title: "Full Stack Real Estate Website",
    desc: "A dynamic real estate website built to list, search, and filter properties with ease. Includes features like property details, user authentication, contact forms, and responsive design to provide a smooth experience for buyers, sellers, and agents.",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.png",
    title: "MERN DeepSeek App",
    desc: "DeepSeek is a MERN stack-based web application designed for advanced search and discovery. It offers powerful filtering, real-time search capabilities, user authentication, and a clean, responsive UI to enhance the user experience across devices.",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.png",
    title: "Video Calling App",
    desc: "A real-time video calling application built using the ZegoCloud API, offering seamless one-on-one and group video calls with high-quality audio and video. Features include user authentication, call invitations, and a responsive, user-friendly interface.",
    link: "/",
  },

];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;