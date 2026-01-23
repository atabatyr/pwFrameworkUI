export const TEST_DATA = {
  validUser: {
    email: 'admin',
    password: 'admin',
  },

  validLoginUser: {
    email: 'tomsmith',
    password: 'SuperSecretPassword!',
  },

  invalidCredentials: {
    email: 'invalid',
    password: 'wrongpassword',
  },

  emptyEmail: {
    email: '',
    password: 'admin',
  },

  emptyPassword: {
    email: 'admin',
    password: '',
  },

  bothEmpty: {
    email: '',
    password: '',
  },

  specialCharUser: {
    email: 'admin!@#$',
    password: 'pass123!',
  },
};
