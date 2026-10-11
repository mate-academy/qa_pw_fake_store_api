import { faker } from '@faker-js/faker';

/** @param {import('../logger/Logger').Logger | null} logger */
export function generateNewProductData(logger = null) {
  const product = {
    title: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price({ min: 1, max: 1000 })),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department().toLowerCase(),
    image: faker.image.url(),
  };

  if (logger) {
    logger.debug(`Generated new product data: ${JSON.stringify(product)}`);
  }

  return product;
}
