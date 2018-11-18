import React from 'react'
import { injectIntl } from 'react-intl'
import logo from '../assets/images/logo.svg'

const Header = injectIntl(({ intl }) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>
          {intl.formatMessage({ id: 'nefteimpeks' })}
        </h1>
        <p>Just another free, fully responsive site template<br />
        design by <a href="https://html5up.net">HTML5 UP</a>.</p>
    </header>
))

export default Header
