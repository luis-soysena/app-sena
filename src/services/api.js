import axios from "axios";

const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

/* SUBSCRIPTIONS */

export const getSubscription = async (email) => {};

/* USERS */

export const getAccess = async ({ email, password }) => {
  try {
    return await axios.post(
      `${VITE_API_URL}/user/login`,
      { email, password },
      {
        headers: {
          "x-api-key": VITE_API_KEY,
        },
      }
    );
  } catch (error) {
    return error;
  }
};
export const getUser = async (email) => {};
