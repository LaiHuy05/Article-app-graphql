import Article from "./models/article.model";

export const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world!';  
    },
    getListArticles: async () => {
      const articles = await Article.find({
        deleted: false
      });

      return articles;
    }
  }
};