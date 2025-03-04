const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Register

async function registerUser(email: string, username: string, password: string, verifyPassword: string) {
    const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password, verifyPassword }),
    });

    const result = await response.json();
    return { response, result };
}

// Register verify account

async function registerVerifyAccount(token: string) {
    const response = await fetch(`${API_URL}/users/verify-account/${token}`, {
        method: "GET",
        credentials: "include"
    });

    const result = await response.json();

    if (!token || token == undefined) {
        return { response, result: null }
    }

    return { response, result };
};


// Login

async function loginUser(email: string, password: string) {
    const response = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: "include",
    });

    const result = await response.json();
    return { response, result };
}

// Logout

async function logout() {
    const response = await fetch(`${API_URL}/users/logout`, {
        method: "GET",
        credentials: "include"
    });

    localStorage.removeItem("accessToken");

    return response.json();
};

// Reset password

async function forgotPassword(email: string) {
    const response = await fetch(`${API_URL}/users/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    });

    const result = await response.json();
    return { response, result }
}

async function resetPassword(password: string, verifyPassword: string, token: string) {


    const response = await fetch(`${API_URL}/users/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, verifyPassword }),
        credentials: "include",
    })


    const result = await response.json();

    if (!token || token == undefined) {
        return { response, result: null }
    }
    return { response, result }
}

// Verify user protected route

async function fetchProtectedData() {
    const token = localStorage.getItem("accessToken");

    const response = await fetch(`${API_URL}/users/verify`, {
        method: "GET",
        credentials: "include",
        headers: { Authorization: `Bearer ${token}` },
    })

    if (response.status === 401) {
        console.log('Unauthorised')
        return { response, result: null }
    }

    if (response.status === 403) {
        console.log("Access token expired, trying to refresh...");

        const refresh_success = await refreshToken();
        if (refresh_success) {
            return fetchProtectedData();
        } else {
            console.log("Refresh token expired, please log in again.");
            await logout();
            return { response, result: null };
        }
    }

    const result = await response.json();

    return { response, result };
}

// Refresh token

async function refreshToken() {
    const response = await fetch(`${API_URL}/users/refresh`, {
        method: 'POST',
        credentials: 'include',
    });

    if (response.ok) {
        const result = await response.json();
        localStorage.setItem("accessToken", result.accessToken);
        window.location.reload();
        return true;
    } else {
        return false;
    }
}

// Get resources

async function getResources(path: string) {
    const response = await fetch(`${API_URL}${path}`);
    if (response.status !== 200) {
        return { response, result: null }
    }
    const result = await response.json();
    return { response, result }
}

// Add resource to list

async function addAndRemoveFavorite(uuid: string, userId: number, type: string) {
    const response = await fetch(`${API_URL}/favorite/`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uuid, userId, type }),
        credentials: "include",
    })

    const result = await response.json();
    return { response, result }
}

// Get favorite list 

async function getFavorite(userId: number) {
    const response = await fetch(`${API_URL}/favorite/all`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify({ userId })
    })

    if (response.status !== 200) {
        return { response, result: null }
    }
    const result = await response.json();
    return { response, result }
};

export {
    registerUser,
    registerVerifyAccount,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    fetchProtectedData,
    refreshToken, getResources, addAndRemoveFavorite, getFavorite
}