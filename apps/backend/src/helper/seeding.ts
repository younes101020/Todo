import { faker } from '@faker-js/faker';

const generateSeeding = (callback: () => Promise<any>, count: number) => {
  return faker.helpers.multiple(callback, { count });
};

export { generateSeeding };
