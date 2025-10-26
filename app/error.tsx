"use client"

export default function Error({error}: {error: Error}) {
    return (
        <div className="flex flex-col items-center border-0">
            <div className="my-10 lg:mt-20">
                <h1 className="text-6xl lg:text-8xl font-bold">Something went wrong!</h1>
                <p className="mt-4 text-center px-4">An unexpected error has occurred. Please try refreshing the page or come back later.</p>
                <p className="mt-2 text-center px-4 text-sm text-gray-500">{error.message}</p>
            </div>
        </div>
    );
}
