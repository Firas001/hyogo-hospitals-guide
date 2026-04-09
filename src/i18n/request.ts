import { getUserLocale } from '@/lib/locale';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  const messages = {
    common: {
      ...(await import(`../../messages/${locale}/common.json`)).default,
    },
    hospitals: {
      ...(await import(`../../messages/${locale}/hospitals.json`)).default,
    },
    areas: {
      ...(await import(`../../messages/${locale}/areas.json`)).default,
    },
    specialties: {
      ...(await import(`../../messages/${locale}/specialties.json`)).default,
    }
  };

  return {
    locale,
    messages
  };
});