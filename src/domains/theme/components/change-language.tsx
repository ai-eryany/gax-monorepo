import * as R from 'ramda';

// Components
import { Flex, BtnPrimary } from '@panda/core';
// Store
import useStore from '@store';

export default function ChangeLanguage() {
  const lang = useStore((store) => store.lang);
  const setLang = useStore((store) => store.setLang);
  const language = useStore((store) => store.language);

  const changeToAr = () => setLang('ar');
  const changeToEn = () => setLang('en');

  return (
    <Flex>
      <BtnPrimary onClick={changeToAr} disabled={R.equals(lang, 'ar')}>
        {language?.actions?.positive?.changeToArabic}
      </BtnPrimary>
      <BtnPrimary onClick={changeToEn} disabled={R.equals(lang, 'en')}>
        {language?.actions?.positive?.changeToEnglish}
      </BtnPrimary>
    </Flex>
  );
}
