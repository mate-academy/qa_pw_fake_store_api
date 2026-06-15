import { faker } from '@faker-js/faker';

export function generateNewProductData(logger = null) {
  const productData = {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    image: faker.internet.url(),
  };

  if (logger) {
    logger.debug(`Generated new user data: ${JSON.stringify(productData)}`);
  }

  return productData;
}
