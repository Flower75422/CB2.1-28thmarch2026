// Define the Backend URL
const API_URL = "http://localhost:3001";

// 1. GET Request
export async function fetchAPI(endpoint: string) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      cache: "no-store",
    });
    
    if (!res.ok) throw new Error("Failed to fetch data");
    
    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    return []; // Return empty array on error
  }
}

// 2. SEED Request (Force create data)
export async function seedAPI() {
  try {
    await fetch(`${API_URL}/cards/seed`, { cache: "no-store" });
    return true;
  } catch (error) {
    console.error("Seed failed:", error);
    return false;
  }
}

// 3. POST Request (Send new data)
export async function postAPI(endpoint: string, payload: object) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Post failed");
    
    return await res.json();
  } catch (error) {
    console.error("Post Error:", error);
    return null;
  }
}