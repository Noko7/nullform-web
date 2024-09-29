import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Character from '../Paragraph/Word';
import { FaArrowRight } from "react-icons/fa";
import Rounded from '../../common/RoundedButton/Index';
export default function Index() {




    const content = [
        { text: "We are a", isHighlighted: false },
        { text: " guerilla force", isHighlighted: true },
        { text: " in the world of", isHighlighted: false },
        { text: " identity and design", isHighlighted: true },
        { text: " we work at the intersection of", isHighlighted: false },
        { text: " design and technology to deliver unique digital experiences like no other", isHighlighted: false },
    ];




    const phrase = "We are a guerilla force in the world of identity and design. We work at the intersection of design and technology to deliver unique digital experiences like no other";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
             <Character paragraph={content}/>
                </p>
               
                <div data-scroll data-scroll-speed={0.5}>
                    <Rounded className={styles.button}>
                    <FaArrowRight fontSize={34}/>
                    </Rounded>
                </div>
            </div>
 
        </div>
    )
}