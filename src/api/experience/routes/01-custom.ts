export default {
  routes: [
    {
      method: 'GET',
      path: '/experiences/by-slug/:slug',
      handler: 'api::experience.experience.findBySlug',
      config: {
        auth: false,
      },
    }
  ]
}
