const BASE_URL = "http://127.0.0.1:8001";

export const fetchRegime = async (token) => {
    const response = await fetch(
        `${BASE_URL}/api/system/regime/current/?market=CRYPTO&symbol=BTCUSDT`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Failed to fetch regime");
    }

    return data;
};

export const fetchStrategy = async (token) => {
    const response = await fetch(
        `${BASE_URL}/api/system/strategy/current/`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Failed to fetch strategy");
    }

    return data;
};

export const fetchMarketSnapshot = async (token) => {
    const response = await fetch(
        `${BASE_URL}/api/system/market/snapshot/?market=CRYPTO`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Failed to fetch market snapshot");
    }

    return data;
};