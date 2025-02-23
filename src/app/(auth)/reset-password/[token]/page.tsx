import ResetPassword from "../reset-password"

export default async function VerifyAccount({ params }: { params: Promise<{ token: string }> }) {
    const token = (await params).token

    return (
        <ResetPassword token={token} />
    )
}