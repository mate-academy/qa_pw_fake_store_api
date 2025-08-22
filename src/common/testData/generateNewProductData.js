import { faker } from '@faker-js/faker';

export function generateNewProductData(logger = null) {
  const product = {
    title: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    image: faker.image.urlPicsumPhotos(),
  };

  if (logger) {
    logger.debug(`Generated new product data: ${JSON.stringify(logger)}`);
  }

  return product;
}
