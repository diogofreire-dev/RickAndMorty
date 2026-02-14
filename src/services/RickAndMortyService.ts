const API_URL = 'https://rickandmortyapi.com/api';

export default {
  async getCharacters() {
    const response = await fetch(`${API_URL}/character`);
    const data = await response.json();
    return data.results;
  },

  async getEpisodes() {
    const allEpisodes: any[] = [];
    let page = 1;
    let totalPages = 1;

    do {
      const response = await fetch(`${API_URL}/episode?page=${page}`);
      const data = await response.json();
      allEpisodes.push(...data.results);
      totalPages = data.info.pages;
      page++;
    } while (page <= totalPages);

    return allEpisodes;
  }
}

