import { Actions, Negative, Positive } from '@interfaces/core';

const positive: Positive = {
  changeToArabic: 'تغيير الى اللغة العربية',
  changeToEnglish: 'تغييرالى اللغة الإنجليزية',
  login: 'تسجيل الدخول',
};

const negative: Negative = undefined;

const actions: Actions = {
  positive,
  negative,
};

export default actions;
