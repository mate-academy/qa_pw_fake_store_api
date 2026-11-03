import { test } from '../../_fixtures/fixtures';

let productId;

test.beforeEach(async ({ newProductData, productsApi }) => {

  const response = await productsApi.createNewProduct(newProductData);
  
  await productsApi.assertCreatedResponseCode(response);
  productId = await productsApi.parseIdFromBody(response);
  
});

test('Update product with new data', async ({ 
  updateProductData, productsApi }) => {
  const response = await productsApi.updateProduct(productId,updateProductData);

  await productsApi.assertSuccessResponseCode(response);
  await productsApi.assertTitleIsCorrect(response, updateProductData.title);
  await productsApi.assertPriceIsCorrect(response, updateProductData.price);
  await productsApi.assertDescriptionIsCorrect(response, updateProductData.description);
  await productsApi.assertCategoryIsCorrect(response, updateProductData.category);
  await productsApi.assertImageIsCorrect(response, updateProductData.image);

});
