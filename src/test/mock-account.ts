import { AuthenticationParams } from '@/usercases/authentication';
import faker from 'faker';
import { AccountModel } from '@/models/account-models';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
});
