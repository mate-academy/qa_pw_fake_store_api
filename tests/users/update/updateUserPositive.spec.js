import { test } from '../../_fixtures/fixtures';

let userId;

test.beforeEach(async ({ newUserData, usersAPI }) => {
  const response = await usersAPI.createNewUser(newUserData);

  await usersAPI.assertSuccessResponseCode(response);

  userId = await usersAPI.parseIdFromBody(response);
});

test('Update user with new data', async ({ updateUserData, usersAPI }) => {
  const response = await usersAPI.updateUser(userId, updateUserData);

  await usersAPI.assertSuccessResponseCode(response);
  await usersAPI.assertEmailHasCorrectValue(response, updateUserData.email);
  await usersAPI.assertUsernameHasCorrectValue(
    response,
    updateUserData.username,
  );
  await usersAPI.assertPasswordHasCorrectValue(
    response,
    updateUserData.password,
  );
});
