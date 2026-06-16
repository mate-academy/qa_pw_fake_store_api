import { faker } from '@faker-js/faker';

export function generateNewProductData(logger = null) {
  const title = faker.commerce.productName();
  const price = Number(faker.commerce.price());
  const category = faker.commerce.department();
  const description = faker.commerce.productDescription();
  const image = faker.image.url();

  const product = {
    title: `${title}`.replaceAll(`'`).toLowerCase(),
    price: `${price}`.toLowerCase(),
    description: `${description}`.toLowerCase(),
    category: `${category}`.toLowerCase(),
    image: `${image}`.toLowerCase(),
  };

  if (logger) {
    logger.debug(`Generated new product data: ${JSON.stringify(product)}`);
  }

  return product;
}
