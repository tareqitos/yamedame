async function registerUser(email: string, username: string, password: string, verifyPassword: string) {
    const response = await fetch("http://localhost:4000/users/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password, verifyPassword }),
    });

    const result = await response.json();
    return { response, result };
}

async function loginUser(email: string, password: string) {
    const response = await fetch("http://localhost:4000/users/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: "include",
    });

    const result = await response.json();
    return { response, result };
}

async function logout() {
    const response = await fetch("http://localhost:4000/users/logout", { method: "GET", credentials: "include" });
    localStorage.removeItem("accessToken");
    
    return response.json();
};

// Dashboard protected route

async function fetchProtectedData() {
    const token = localStorage.getItem("accessToken");

    const response = await fetch("http://localhost:4000/users/dashboard", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    })

    if (response.status === 403) {
        console.log("Access token expired, trying to refresh...");

        const refresh_success = await refreshToken();
        if (refresh_success) {
            return fetchProtectedData();
        } else {
            console.log("Refresh token expired, please log in again.");
            logout()
        }
    }

    const result = await response.json();
    return { response, result };
}

// Refresh token

async function refreshToken() {
    const response = await fetch("http://localhost:4000/users/refresh", {
        method: 'POST',
        credentials: 'include',
    });

    if (response.ok) {
        const result = await response.json();
        localStorage.setItem("accessToken", result.accessToken);
        return true;
    } else {
        return false;
    }
}


export { registerUser, loginUser, logout, fetchProtectedData, refreshToken}