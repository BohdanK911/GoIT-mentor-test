import axios from 'axios';

export const GITHUB_API_REPOS_PER_PAGE = 20;

const baseURL = process.env.REACT_APP_API_URL;
const githubApiRequest = axios.create({ baseURL });

const githubApi = {
  getRepos: async (searchString, page) =>
    await githubApiRequest.get('/search/repositories', {
      params: {
        q: searchString || 'react',
        per_page: GITHUB_API_REPOS_PER_PAGE,
        page: page || 1
      }
    })
};

export default githubApi;
