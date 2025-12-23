import { test, expect } from '../../_fixtures/fixtures';

test.describe('PUT /products/:id', () => {
  test('should update product successfully', async ({ productsApi }) => {
    // Arrange
    const initialProductData = {
      title: 'Old Product',
      price: 20.5,
      description: 'Old description',
      image: 'https://i.pravatar.cc',
      category: 'electronics',
    };

    const updatedProductData = {
      title: 'Updated Product',
      price: 35.99,
      description: 'Updated description',
      image: 'https://i.pravatar.cc',
      category: 'electronics',
    };

    const createResponse = await productsApi.createProduct(initialProductData);
    const createdProduct = await createResponse.json();
    const productId = createdProduct.id;

    // Act
    const updateResponse = await productsApi.updateProduct(
      productId,
      updatedProductData,
    );
    const updateResponseBody = await updateResponse.json();

    // Assert
    expect(updateResponse.status()).toBe(200);

    expect(updateResponseBody.id).toBe(productId);
    expect(updateResponseBody.title).toBe(updatedProductData.title);
    expect(updateResponseBody.price).toBe(updatedProductData.price);
    expect(updateResponseBody.description).toBe(updatedProductData.description);
    expect(updateResponseBody.category).toBe(updatedProductData.category);
    expect(updateResponseBody.image).toBe(updatedProductData.image);
  });
});
