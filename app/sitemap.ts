import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://joelangeldev.site/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://joelangeldev.site/sobre-mi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://joelangeldev.site/servicios',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
        url: 'https://joelangeldev.site/portafolio',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://joelangeldev.site/contacto',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
  ]
}