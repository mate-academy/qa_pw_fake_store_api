import { test, expect } from '../../_fixtures/fixtures';

test.describe('DELETE /products/:id', () => {
  test('should delete product by id successfully', async ({ productsApi }) => {
    // Arrange
    const productData = {
      title: 'Product to delete',
      price: 15.99,
      description: 'Product created for delete test',
      image: 'https://i.pravatar.cc',
      category: 'electronics',
    };

    const createResponse = await productsApi.createProduct(productData);
    const createdProduct = await createResponse.json();
    const productId = createdProduct.id;

    // Act
    const deleteResponse = await productsApi.deleteProductById(productId);
    const deleteResponseBody = await deleteResponse.json();

    // Assert
    expect(deleteResponse.status()).toBe(200);
    expect(deleteResponseBody.id).toBe(productId);
  });
});
