import { test } from '../../_fixtures/fixtures';

let userId;

test.beforeEach(async ({ newUserData, usersApi }) => {
  const response = await usersApi.createNewUser(newUserData);

  await usersApi.assertSuccess201ResponseCode(response);

  userId = await usersApi.parseIdFromBody(response);
});

test('Update user with new data', async ({ updateUserData, usersApi }) => {
  const response = await usersApi.updateUser(userId, updateUserData);

  await usersApi.assertSuccess200ResponseCode(response);
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
