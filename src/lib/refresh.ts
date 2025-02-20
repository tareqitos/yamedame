import logout from "./logout";

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

    return response.status;
}

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

export default fetchProtectedData;

