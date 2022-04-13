const axios = require('axios');

const axiosCall = async () => {
  return await axios({
    method: 'get',
    url: `https://api.github.com/search/repositories`,
    params: {
      q: 'language:javascript',
      order: 'desc',
      sort: 'stargazers_count',
      stargazers_count: '100000',
      per_page: 3,
      page: 0,
    },
  });
};
export default axiosCall;
