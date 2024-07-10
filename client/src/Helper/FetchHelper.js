import { BASE_URL } from "./Helper";
export const fetchAdminData = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/api/userget?username=${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const adminData = await response.json();
      return adminData;
    } else {
      // Handle error
      console.error("Error fetching staff details:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error fetching staff details:", error);
    return null;
  }
};