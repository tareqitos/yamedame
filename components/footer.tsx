import { HeartIcon } from "@phosphor-icons/react/dist/ssr"

export const Footer = () => {
    
    const date = new Date()

    return (
        <footer className='flex justify-between p-4 mt-10 bg-card-background'>
            <p>{`© ${date.getFullYear()} yame dame`}</p>
            <p>Made with <HeartIcon className="text-red-500 inline align-top" size={24} weight="fill" />
            </p>
        </footer>
    )
}