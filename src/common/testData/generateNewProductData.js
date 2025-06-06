import { faker } from '@faker-js/faker';

export function generateNewProductData(logger = null) {
  const product = {
    title: faker.commerce.product(),
    price: faker.commerce.price({ min: 0.1, max: 200 }),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    image: faker.image.url(),
  };

  if (logger) {
    logger.debug(`Generated new product data: ${JSON.stringify(product)}`);
  }

  return product;
}
