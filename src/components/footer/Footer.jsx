import styles from './Footer.module.scss'

function Footer() {
    
    const date = new Date()

    return (
        <footer className={styles['footer']}>
            {`© ${date.getFullYear().toLocaleString().replace(/\s/g, '')} yame dame`}
            <p>Made with ♥️</p>
        </footer>
    )
}

export default Footer