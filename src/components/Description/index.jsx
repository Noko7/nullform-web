import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import Character from '../Paragraph/Word';
import useMousePosition from '../../app/utils/useMousePosition';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Index() {
    const content = [
        { text: "We are a", isHighlighted: false, indent:true },
        { text: " guerilla force", isHighlighted: true },
        { text: " in the world of", isHighlighted: false },
        { text: " identity and design", isHighlighted: true },
        { text: " we work at the intersection of", isHighlighted: false },
        { text: " design and technology to deliver unique digital experiences like no other", isHighlighted: false },
    ];

    const description = useRef(null);
    const isInView = useInView(description);
    const { x, y } = useMousePosition();
    const [isHovered, setIsHovered] = useState(false);

    const size = isHovered ? 400 : 40;

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>


                <div className={styles.headerText}>
                    <img className={styles.downArrow} src='/assets/icons/Down.svg'/>
                    <h1>Who we are</h1>
                </div>



                {/* Mouse position mask animation for Character */}
                <ScrollAnimation animateIn="fadeInUp" duration={1}>
                    <motion.div
                        className={styles.mask}
                        animate={{
                            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                            WebkitMaskSize: `${size}px`,
                        }}
                        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                    />
                    
                    {/* Character (spans across the screen) */}
                    <div className={styles.fullWidth}>
                        <Character paragraph={content} />
                    </div>
                </ScrollAnimation>
                
                <div className={styles.buttonContainer}>
                {/* Below the Character */}
                <div className={styles.textContainer}>
                    {/* Secondary paragraph animation */}
                    <motion.p variants={opacity} animate={isInView ? "open" : "closed"} style={{fontSize: '34px'}}>
                        The combination of our knack for design, code & animations puts us in a great place to build you a kickass website that converts.
                    </motion.p>

                    {/* Call-to-action button */}
                    <div data-scroll data-scroll-speed={0.1}>
                        <Rounded className={styles.button}>
                            <p>Learn more</p>
                        </Rounded>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
