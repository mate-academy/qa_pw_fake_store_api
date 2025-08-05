import { test } from '../../_fixtures/fixtures';

let userId;

test.beforeEach(async ({ newUserData, usersApi }) => {
  const response = await usersApi.createNewUser(newUserData);

  await usersApi.assertSuccessResponseCode201(response);

  userId = await usersApi.parseIdFromBody(response);
});

test('Update user with new data', async ({ updateUserData, usersApi }) => {
  const response = await usersApi.updateUser(userId, updateUserData);

  await usersApi.assertSuccessResponseCode200(response);
  await usersApi.assertEmailHasCorrectValue(response, updateUserData.email);
  await usersApi.assertUsernameHasCorrectValue(
    response,
    updateUserData.username,
  );
  await usersApi.assertPasswordHasCorrectValue(
    response,
    updateUserData.password,
  );
});
