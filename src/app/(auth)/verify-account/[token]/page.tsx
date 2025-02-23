import VerifyAccountClient from "../verify-account"

export default async function VerifyAccount({ params }: { params: Promise<{ token: string }> }) {
    const token = (await params).token

    return (
        <VerifyAccountClient token={token} />
    )
}