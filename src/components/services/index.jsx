"use client";
import React, {useState} from 'react';
import styles from './styles.module.scss';
import Titles from './Titles/index';
import Descriptions from './Descriptions/index';
import ScrollAnimation from 'react-animate-on-scroll';

const data = [
  {
      title: "Web Design",
      description: "Working on the Next-Generation HMI Experience without no driving experience.",
      speed: 0.5
  },
  {
      title: "Web Development",
      description: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
      speed: 0.5
  },
  {
      title: "UI/UX",
      description: "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
      speed: 0.67
  },
  {
      title: "Branding",
      description: "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
      speed: 0.8
  },
  {
      title: "Graphic Design",
      description: "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
      speed: 0.8
  },
  {
      title: "App Development",
      description: "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
      speed: 0.8
  }
]




const Services = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  
  
  return (
<>

<div className={styles.container}>
  <div>
<h1 className={styles.contentLabel}>What i do</h1>

<ScrollAnimation animateIn='fadeInUp'>
  <Titles data={data} setSelectedProject={setSelectedProject}/>
  <Descriptions data={data} selectedProject={selectedProject}/>
  </ScrollAnimation>
</div> 






</div>   




</>
  )
}





export default Services