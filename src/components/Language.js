import React, { Component } from 'react'
import locales from '../constants/locales'

class Language extends Component {
  state = {
    value: '',
  }

  componentDidMount() {
    const { locale } = this.props
    this.setState({
      value: locale,
    })
  }

  handleChange = event => {
    const { pathname, locale } = this.props
    const { value } = event.target
    const subPath = pathname.replace(`/${locale}`, '')

    if (value === this.state.value) {
      return
    }

    this.setState({ value }, () => {
      window.location.href = `/${value}${subPath}`
    })
  }

  render() {
    console.log('lang log', this.props)

    const { locale } = this.props
    const { value } = this.state

    if (!value) {
      return null
    }

    return (
      <div className="language-wrapper">
        <select className="language" value={value} onChange={this.handleChange}>
          {
            Object.keys(locales).map(lang => (
              <option key={locales[lang].path} value={locales[lang].path}>
                {locales[lang].locale}
              </option>
            ))
          }
        </select>
      </div>
    )
  }
}

export default Language
