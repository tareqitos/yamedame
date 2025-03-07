import VerifyAccountClient from "../dashboard"

export default async function VerifyAccount({ params }: { params: Promise<{ id: number }> }) {
    const id = (await params).id

    return (
        <VerifyAccountClient id={id} />
    )
}