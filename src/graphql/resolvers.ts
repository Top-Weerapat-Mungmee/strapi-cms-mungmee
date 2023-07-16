import { Strapi } from '@strapi/strapi';

export const resolvers = ({ strapi }: { strapi: Strapi }) => {
  return {
    Query: {
      address: {
        resolve: async (parent, args, context) => {
          const { id, status, limit } = args.input;
          const { toEntityResponse } = strapi.service(
            "plugin::graphql.format"
          ).returnTypes;
          const data = await strapi.services["api::category.category"].find({
            filters: { slug: 'thai-food' },
          });

          const response = toEntityResponse(data.results[0]);

          console.log({ response })


          return { id, status, limit };
        },
      },
    },
  }
}