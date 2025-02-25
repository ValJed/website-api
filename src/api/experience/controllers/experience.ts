/**
 * experience controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::experience.experience', ({strapi}) => ({
  async findBySlug(ctx) {
    const {slug} = ctx.params
    if (!slug) {
      return ctx.badRequest('slug is missing')
    }
    const entry = await strapi.db.query('api::experience.experience').findOne({
      where: {
        slug,
      },
      populate: {
        logo: true,
        stack: true
      }
    })
    return entry
  }
}));
