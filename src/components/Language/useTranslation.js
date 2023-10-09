// useCustomTranslation.js
import { useTranslation } from 'react-i18next';

export function useCustomTranslation() {
  const { t, i18n } = useTranslation();

  return { t, i18n };
}
