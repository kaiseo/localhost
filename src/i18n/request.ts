import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

const messageImports = {
    en: () => import('@/messages/en.json'),
    ko: () => import('@/messages/ko.json')
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    const messages = (await messageImports[locale as keyof typeof messageImports]()).default;

    return {
        locale,
        messages
    };
});
