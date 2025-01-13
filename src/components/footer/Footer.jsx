import styles from './Footer.module.scss'

function Footer() {
    
    const date = new Date()

    return (
        <footer>
            {`© ${date.getFullYear().toLocaleString()} yame dame`}
            <p>Made with ♥️</p>
        </footer>
    )
}

export default Footer