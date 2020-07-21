const axios = require('axios');
const config = require('./config');

exports.createPages = async ({ actions }) => {
  const promises = config.hatena.urls.map((url) => {
    return axios.get(config.hatena.endpoint + '?url=' + url + '&format=json');
  });
  const values = await Promise.all(promises);
  const blogs = values.map((res) => {
    return {
      title: res.data.title,
      description: res.data.description,
      url: res.data.url,
      image_url: res.data.image_url || config.hatena.defaultImage,
      published: res.data.published,
    };
  });
  actions.createPage({
    path: '/',
    component: require.resolve('./src/templates/index.jsx'),
    context: {
      blogs,
    },
  });
};
