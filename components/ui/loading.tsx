import '@/app/loader.css'

export const LoadingAnimation = () => {
    return (
        <div className="wrapper">
            <div className="loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className="loader bg">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}