var user = {
  userId: '53e117ff29faac1c',
  username: 'admin',
  password: '123456',
};

export default [
  {
    url: '/api/oauth2/token',
    method: 'POST',
    response: ({ body }) => {
      return {
        token: 'cf136dc3c1fc93f31185e5885805d',
        user: user,
      };
    },
  },
];
