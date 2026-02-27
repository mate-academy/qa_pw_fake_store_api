import { faker } from '@faker-js/faker';

export function generateNewProductData(logger = null) {
  const product = {
    title: faker.commerce.productName(),
    price: Number(faker.commerce.price({ min: 1, max: 1000, dec: 2 })),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    image: faker.image.urlPicsumPhotos({ width: 640, height: 480 })
  };

  if (logger) {
    logger.debug(`Generated new product data: ${JSON.stringify(product)}`);
  }

  return product;
}