import { faker } from '@faker-js/faker';

export function generateNewProductData(logger = null) {
  const title = faker.lorem.words(2).toLowerCase();
  const price = 0.1
  const description = faker.lorem.sentence();
  const category = faker.commerce.department();
  const image = faker.image.url();

  const product = {
    title,
    price,
    description,
    category,
    image,
  };

  if (logger) {
    logger.debug(`Generated new product data: ${JSON.stringify(product)}`);
  }

  return product;
}
