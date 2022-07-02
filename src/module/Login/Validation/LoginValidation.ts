const LoginValidation = ({ username, password }: any) => {
  const errors: any = {};
  if (!username) {
    errors.username = 'Username is required';
  } else if (username.length < 3) {
    errors.username = 'Minimal character length is 4';
  }
  if (!password) {
    errors.password = 'password is required';
  } else if (password.length < 3) {
    errors.password = 'Minimal character length is 4';
  }
  return errors;
};

export default LoginValidation;
