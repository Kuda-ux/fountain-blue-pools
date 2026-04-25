import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.fountainpoolrepairs.co.zw'
const DEFAULT_IMAGE = `${SITE_URL}/images/project-1.jpeg`

export default function SEO({
  title,
  description,
  keywords,
  path = '/',
  image = DEFAULT_IMAGE,
}) {
  const fullTitle = title
    ? `${title} | Fountain Blue Pools Zimbabwe`
    : 'Fountain Blue Pools | #1 Swimming Pool Construction & Repairs Zimbabwe'
  const fullUrl = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
