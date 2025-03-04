/**
 *  article controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({strapi}) => ({
  async findBySlug(ctx) {
    const {slug} = ctx.params
    if (!slug) {
      return ctx.badRequest('slug is missing')
    }
    const entry = await strapi.db.query('api::article.article').findOne({
      where: {
        slug,
      },
      populate: {
        cover: true,
        category: true
      }
    })
    return entry
  }
}));
