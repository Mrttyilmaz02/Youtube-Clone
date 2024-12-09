import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    'x-rapidapi-key': '6892fe0c40msh1bab1b6c3b0f8c0p10f283jsnb00a61055d9c',
    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
  }
});

export default api;