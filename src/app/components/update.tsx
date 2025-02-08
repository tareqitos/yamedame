interface Props {
    message: string;
}

export default function Update({message}: Props) {
    return (
        <>
            <p className="update-message">{message}</p>
        </>
    )
}