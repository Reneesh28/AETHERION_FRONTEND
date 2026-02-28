const BASE_URL = "http://127.0.0.1:8001";

export const loginRequest = async (username, password) => {
    const response = await fetch(`${BASE_URL}/api/auth/login/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail || data.error || "Login failed");
    }

    return data;
};