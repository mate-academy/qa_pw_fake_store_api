import { faker } from '@faker-js/faker';

export function generateNewProductData(logger = null) {

  const product = {
    title: `${faker.food.dish}`.toLowerCase(),
    price: Math.random() * 100,
    description: faker.food.description(),
    category: faker.food.ethnicCategory(),
    image: faker.image.url(),
  };

  if (logger) {
    logger.debug(`Generated new product data: ${JSON.stringify(product)}`);
  }

  return product;
}
