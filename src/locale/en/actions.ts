import { Actions, Negative, Positive } from '@interfaces/core';

const positive: Positive = {
  changeToArabic: 'Change To Arabic',
  changeToEnglish: 'Change to English',
  login: 'login',
};

const negative: Negative = undefined;

const actions: Actions = {
  positive,
  negative,
};

export default actions;
