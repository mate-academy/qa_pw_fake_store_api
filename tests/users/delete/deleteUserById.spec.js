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

test('Delete user by Id', async ({ usersApi }) => {
  const response = await usersApi.delete(userId);

  await usersApi.assertSuccessResponseCode(response, responseCodes.SUCCESS_OK);
});
