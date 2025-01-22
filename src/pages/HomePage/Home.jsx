import { useEffect } from 'react';
import styles from './Home.module.scss'
import { Link } from 'react-router';


function Home({setIsHome}) {

    let data = [
        { title: 'Study Resources', desc: 'Access essential materials for your study sessions', path: 'resources' },
        { title: 'Media Library', desc: 'Explore videos, podcasts, and more to enhance your Japanese learning!', path: 'media' },
        { title: 'And more to come', desc: 'Stay tuned for more resources and updates!' }
    ];

    function disableIsHome() {
        setIsHome(false)
    }
    
    useEffect (() => {
        setIsHome(true);
    }, [setIsHome])

    return (
        <>
            <div className={styles["home-wrapper"]}>
                <div className={styles['main-page-logo']}>
                    <a href="/"><span className={styles['logo']}></span>やめだめ</a>
                    <p>No excuses not to learn Japanese</p>
                </div>
                <div className={styles["resource-container"]}>
                    {data.map((card, i) => (
                        <Link to={`/${card.path}`} onClick={disableIsHome} key={i} className={styles["resource-card"]}>
                            {card.path == 'resources' ? <span>📖</span> :
                                card.path == 'media' ? <span>💾</span> : <span>✨</span>}
                            <h2>{card.title}</h2>
                            <p>{card.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;