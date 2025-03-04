export default {
  routes: [
    {
      method: 'GET',
      path: '/articles/by-slug/:slug',
      handler: 'api::article.article.findBySlug',
      config: {
        auth: false,
      },
    }
  ]
}
