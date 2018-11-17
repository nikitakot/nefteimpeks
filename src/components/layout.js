import React from 'react'
import '../assets/scss/main.scss'
import { IntlProvider, addLocaleData } from 'react-intl'

import Footer from './Footer'

// Locale data
import enData from 'react-intl/locale-data/en'
import ukData from 'react-intl/locale-data/uk'
import ruData from 'react-intl/locale-data/ru'

// Messages
import en from '../i18n/en.json'
import uk from '../i18n/ua.json'
import ru from '../i18n/ru.json'

const messages = { en, uk, ru }

addLocaleData([...enData, ...ukData, ...ruData])

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading'
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  render() {
    let { children, locale } = this.props

    if(locale === 'ua'){
      locale = 'uk'
    }

    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div className={`body ${this.state.loading}`}>
          <div id="wrapper">
            {children}
            <Footer/>
          </div>
        </div>
      </IntlProvider>
    )
  }
}

export default Template
