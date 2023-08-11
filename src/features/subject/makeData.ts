import { faker } from '@faker-js/faker';

export type Person = {
  index?: number;
  profile: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
};

export function createRandomUser(): Person {
  return {
    profile: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.datatype.number(40),
    visits: faker.datatype.number(1000),
    progress: faker.datatype.number(100)
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 30
});
