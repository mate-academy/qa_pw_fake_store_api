import { faker } from '@faker-js/faker';

export function generateNewProductData(logger = null) {
  const id = faker.commerce.product();
  const title = faker.commerce.productName();
  const price = parseFloat(faker.commerce.price());
  const description = faker.commerce.productDescription();
  const category = faker.commerce.department();
  const image = faker.image.url();

  const product = {
    id: id,
    title: title,
    price: price,
    description: description,
    category: category,
    image: image,
  };

  if (logger) {
    logger.debug(`Generated new product data: ${JSON.stringify(product)}`);
  }

  return product;
}
