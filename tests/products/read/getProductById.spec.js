import { test, expect } from '../../_fixtures/fixtures';

test.describe('GET /products/:id', () => {
  test('should return product by id', async ({ productsApi }) => {
    // Arrange
    const productData = {
      title: 'Read Product',
      price: 49.99,
      description: 'Product for get by id test',
      image: 'https://i.pravatar.cc',
      category: 'electronics',
    };

    const createResponse = await productsApi.createProduct(productData);
    const createdProduct = await createResponse.json();
    const productId = createdProduct.id;

    // Act
    const getResponse = await productsApi.getProductById(productId);
    const getResponseBody = await getResponse.json();

    // Assert
    expect(getResponse.status()).toBe(200);

    expect(getResponseBody.id).toBe(productId);
    expect(getResponseBody.title).toBe(productData.title);
    expect(getResponseBody.price).toBe(productData.price);
    expect(getResponseBody.description).toBe(productData.description);
    expect(getResponseBody.category).toBe(productData.category);
    expect(getResponseBody.image).toBe(productData.image);
  });
});
