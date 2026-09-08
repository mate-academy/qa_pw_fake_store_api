import { test } from '../../_fixtures/fixtures';
import * as responseCodes from '../../../src/api/constants/responseCodes';

let userId;

test.beforeEach(async ({ newUserData, usersApi }) => {
  const response = await usersApi.create(newUserData);

  await usersApi.assertSuccessResponseCode(
    response,
    responseCodes.SUCCESS_CREATED,
  );

  userId = await usersApi.parseIdFromBody(response);
});

test('Update user with new data', async ({ updateUserData, usersApi }) => {
  const response = await usersApi.update(userId, updateUserData);

  await usersApi.assertSuccessResponseCode(response, responseCodes.SUCCESS_OK);
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
