'use server'

import { cookies } from "next/headers"

async function  loginCookie (refreshToken: string) {
    (await cookies()).set(
        'refreshToken',
        refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 31536000
    })
}

async function logoutCookie () {
    (await cookies()).delete(
        'refreshToken'
    )
}

export { loginCookie, logoutCookie }