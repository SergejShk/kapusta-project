import { Report } from 'notiflix/build/notiflix-report-aio';

export const authValidation = (email, password) => {
  if (email.length < 4 || !email.includes('@')) {
    Report.failure(
      'Failure',
      'An email must contain at least 4 or more characters including @',
      'Ok'
    );
    return false;
  }

  if (password.length < 8) {
    Report.failure(
      'Failure',
      'A password must contain at least 8 or more characters',
      'Ok'
    );
    return false;
  }

  return true;
};
