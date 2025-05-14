import { useRuntimeConfig } from '#app'

export function usePageTitle(pageTitle) {
  const config = useRuntimeConfig()
  return `${pageTitle} - ${config.public.siteTitle}`
}