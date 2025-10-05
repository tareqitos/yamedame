export const Footer = () => {
    
    const date = new Date()

    return (
        <footer className='flex justify-between p-4 bg-card-background'>
            <p>{`© ${date.getFullYear()} yame dame`}</p>
            <p>Made with ♥️</p>
        </footer>
    )
}