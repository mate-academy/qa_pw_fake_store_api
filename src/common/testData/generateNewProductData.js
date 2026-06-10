import { faker } from '@faker-js/faker';

export function generateNewProductData(logger = null) {
  const product = {
    title: faker.lorem.word(),
    price: faker.number.float({ min: 0, max: 1, fractionDigits: 1 }),
    description: faker.lorem.sentence(),
    category: faker.lorem.word(),
    image: faker.internet.url(),
  };

  if (logger) {
    logger.debug(`Generated new product data: ${JSON.stringify(product)}`);
  }

  return product;
}
