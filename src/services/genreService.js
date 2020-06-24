import httpService from "./httpService";

function getGenres() {
  return httpService.get(`/genres`);
}

export default {
  getGenres,
};
