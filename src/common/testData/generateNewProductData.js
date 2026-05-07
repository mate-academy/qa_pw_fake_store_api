import { faker } from "@faker-js/faker";

export function generateNewProductData(logger = null) {
  const title = faker.book.title();
  const price = faker.commerce.price();
  const description = faker.commerce.productDescription();
  const category = faker.book.genre();
  const image = faker.image.urlPicsumPhotos();

  const product = {
    title: title,
    price: price,
    description: description,
    category: category.toLowerCase(),
    image: image,
  }

  if (logger) {
    logger.debug(`Generated new product data: ${JSON.stringify(product)}`);
  }

  return product;
}