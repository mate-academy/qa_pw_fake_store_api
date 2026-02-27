import { test } from '../../_fixtures/fixtures';

let productId;

test.beforeEach(async ({ newProductData, productsApi }) => {
  const response = await productsApi.createNewUser(newProductData);

  await productsApi.assertSuccessResponseCode(response);

  productId = await productsApi.parseIdFromBody(response);
});

test('Update product with new data', async ({
  updateProductData,
  productsApi
}) => {
  const response = await productsApi.updateUser(productId, updateProductData);

  await productsApi.assertSuccessResponseCode(response);
  await productsApi.assertTitleIsCorrect(
    response,
    updateProductData.title,
  );
  await productsApi.assertPriceHasCorrectValue(
    response,
    updateProductData.price,
  )
  await productsApi.assertDescriptionIsCorrect(
    response,
    updateProductData.description,
  )
  await productsApi.assertCategoryHasCorrectValue(
    response,
    updateProductData.category,
  )
  await productsApi.assertImageIsCorrect(
    response,
    updateProductData.image,
  )
});
