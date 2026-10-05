import { faker } from '@faker-js/faker';

export function generateNewProductData(logger = null) {
  const categories = ['electronics', 'clothing', 'books', 'jewelery'];

  const product = {
    title: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    category: faker.helpers.arrayElement(categories),
  };

  if (logger) {
    logger.debug(`Generated new product data: ${JSON.stringify(product)}`);
  }

  return product;
}
