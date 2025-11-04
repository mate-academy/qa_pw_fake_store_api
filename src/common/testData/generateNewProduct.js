import { faker } from '@faker-js/faker';

export function generateNewProductData(logger = null) {
  const title = faker.word.words({ min: 2, max: 5 });
  const description = faker.lorem.sentence();
  const price = parseFloat(faker.commerce.price({ min: 1, max: 1000, dec: 2 }));
  const category = faker.commerce.department();
  const image = faker.image.urlLoremFlickr({
    category: 'product',
    width: 640,
    height: 480,
  });

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
