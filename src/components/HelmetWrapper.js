import { injectIntl } from 'react-intl'
import Helmet from 'react-helmet'
import React from 'react'

const HelmetWrapper = ({ intl }) => <Helmet title={intl.formatMessage({ id: 'nefteimpeks' })} />

export default injectIntl(HelmetWrapper)