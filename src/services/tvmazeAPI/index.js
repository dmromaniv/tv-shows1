import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.tvmaze.com",
});

export async function fetchTVShowData(query) {
  const response = await axiosInstance.get("/search/shows", {
    params: {
      q: query,
    },
  });
  return response;
}

export async function fetchTVShowById(id) {
  const response = await axiosInstance.get(`/shows/${id}`);

  return response;
}
