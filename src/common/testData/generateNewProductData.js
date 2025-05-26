import { faker } from '@faker-js/faker';

export function generateNewProductData(logger = null) {
  const product = {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.productMaterial(),
    image: faker.image.urlPicsumPhotos(),
  }

  if (logger) {
    logger.debug(`Generated new user data: ${JSON.stringify(product)}`);
  }

  return product;
}
