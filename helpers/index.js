import fetch from "node-fetch";

export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return response.text();
  } catch (error) {
    console.log(error);
  }
};
