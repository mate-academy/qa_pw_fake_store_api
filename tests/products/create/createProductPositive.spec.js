import { test, expect } from '../../_fixtures/fixtures';

test.describe('POST /products', () => {
  test('should create product successfully', async ({ productsApi }) => {
    // Arrange
    const productData = {
      title: 'Test Product',
      price: 99.99,
      description: 'Test product description',
      image: 'https://i.pravatar.cc',
      category: 'electronics',
    };

    // Act
    const response = await productsApi.createProduct(productData);
    const responseBody = await response.json();

    // Assert
    expect(response.status()).toBe(200);

    expect(responseBody).toHaveProperty('id');
    expect(responseBody.title).toBe(productData.title);
    expect(responseBody.price).toBe(productData.price);
    expect(responseBody.description).toBe(productData.description);
    expect(responseBody.image).toBe(productData.image);
    expect(responseBody.category).toBe(productData.category);
  });
});
