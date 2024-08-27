import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const VERCEL_URL = 'https://www.4srent.es'
  return [
    {
      url: `${VERCEL_URL}`,
      lastModified: new Date(),
    //   alternates: {
    //     languages: {
    //       es: 'https://acme.com/es',
    //       de: 'https://acme.com/de',
    //     },
    //   },
    },
    {
      url: `${VERCEL_URL}/servicios`,
      lastModified: new Date(),
    //   alternates: {
    //     languages: {
    //       es: 'https://acme.com/es/about',
    //       de: 'https://acme.com/de/about',
    //     },
    //   },
    },
    {
      url: `${VERCEL_URL}/blog`,
      lastModified: new Date(),
    //   alternates: {
    //     languages: {
    //       es: 'https://acme.com/es/blog',
    //       de: 'https://acme.com/de/blog',
    //     },
    //   },
    },
    {
      url: `${VERCEL_URL}/sobre-nosotros`,
      lastModified: new Date(),
    //   alternates: {
    //     languages: {
    //       es: 'https://acme.com/es/blog',
    //       de: 'https://acme.com/de/blog',
    //     },
    //   },
    },
    {
      url: `${VERCEL_URL}/testimonios`,
      lastModified: new Date(),
    //   alternates: {
    //     languages: {
    //       es: 'https://acme.com/es/blog',
    //       de: 'https://acme.com/de/blog',
    //     },
    //   },
    },
    {
      url: `${VERCEL_URL}/preguntas-frecuentes`,
      lastModified: new Date(),
    //   alternates: {
    //     languages: {
    //       es: 'https://acme.com/es/blog',
    //       de: 'https://acme.com/de/blog',
    //     },
    //   },
    },
]
}