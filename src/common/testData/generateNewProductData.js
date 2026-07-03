import { faker } from '@faker-js/faker';

export function generateNewProductData(logger = null) {
    const title = faker.commerce.productName();
    const price = parseFloat(faker.commerce.price());
    const description = faker.commerce.productDescription();
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
