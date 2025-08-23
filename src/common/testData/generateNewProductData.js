import { faker } from '@faker-js/faker';

export function generateNewProductData(logger = null) {
  const product = {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.productAdjective(),
    image: faker.image.url(),
  };

  if (logger) {
    logger.debug(`Generated new product data: ${JSON.stringify(product)}`);
  }

  return product;
}
