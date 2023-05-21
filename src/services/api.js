import axios from "axios";
import sha1 from "js-sha1";

const { VITE_API_URL, VITE_API_KEY, VITE_PASSWD_HASH } = import.meta.env;

/* SUBSCRIPTIONS */

export const getSubscription = async (email) => {
  try {
    return await axios.get(
      `${VITE_API_URL}/subscription/search?email=${email}`,
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

export const getAllSubscriptions = async (email) => {
  try {
    return await axios.get(
      `${VITE_API_URL}/subscription`,
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

/* USERS */

export const getAccess = async ({ email, password }) => {
  try {
    return await axios.post(
      `${VITE_API_URL}/user/login`,
      { email, password: sha1(`${VITE_PASSWD_HASH}0a${password}`) },
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
