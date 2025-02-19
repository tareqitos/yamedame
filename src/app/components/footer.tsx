"use client"

export const Footer = () => {
    
    const date = new Date()

    return (
        <footer className='footer'>
            <p>{`© ${date.getFullYear()} yame dame`}</p>
            <p>Made with ♥️</p>
        </footer>
    )
}