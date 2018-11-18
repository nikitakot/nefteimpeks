import React from 'react'
import { Link } from 'gatsby'
import { injectIntl } from 'react-intl'

const LocalizedLink = ({ to, intl: { locale }, ...props }) => {
  if(locale === 'uk') locale = 'ua'

  const path = `/${locale}${to}`

  return <Link {...props} to={path} />
}

export default injectIntl(LocalizedLink)