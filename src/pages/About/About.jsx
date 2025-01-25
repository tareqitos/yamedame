import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.scss'
import components_styles from '../../styles/Components.module.scss'

function About({ setHideSidebarButton }) {

    function disableIsHome() {
        setHideSidebarButton(false)
    }

    useEffect(() => {
        setHideSidebarButton(true);
    }, [setHideSidebarButton])

    return (
        <>
            <div className={styles["about-container"]}>

                <div className={styles["top-links"]}>
                    <Link to='/' className={`${components_styles.btn} ${components_styles['extra-links']}`}>Home</Link>
                    <Link to='/resources' onClick={disableIsHome} className={`${components_styles.btn} ${components_styles['extra-links']}`}>Study Resources</Link>
                </div>
                <div className={styles["text-content"]}>
                    <h1>About</h1>
                    <p>Hello and welcome to Yame Dame! <span className={styles['circle']}></span></p>
                    <p>This project was created for several reasons. Initially, I wanted a convenient place to organize and access my resources for studying Japanese.
                        After sharing it with a few friends, the idea of sharing it with the world came to mind.</p>
                    <p>My motto has always been to never give up, which is what inspired the name of this project. <span className={styles['j-word']}>やめ</span> (yame) comes from the verb "yameru" (<span className={styles['j-word']}>やめる</span>), which means "to stop" or "to quit." <span className={styles['j-word']}>だめ</span> (dame) means "no good," "not allowed," or "don't." Together, <span className={styles['j-word']}>やめだめ</span> (yame dame) can be interpreted as "Don’t stop" or "Don’t give up!"</p>
                    <p>I strongly believe that knowledge should be shared freely and without limits. Creating this project and making it accessible to everyone is my way of expressing gratitude to those who created the resources I share here. The goal is to gather the most useful materials in one place for students, teachers, self-learners, and anyone who wants to learn more about the Japanese language and culture.</p>
                    <p>Take care, and happy learning!</p>
                    <img className={styles['tareqitos-face']} src="https://cloud.tareqitos.me/i/057cfd5d-f418-4e2c-a350-370ae4eec222.png?width=100" alt="" />
                    <p>Tareqitos</p>
                </div>
            </div>
        </>
    )
}

export default About;