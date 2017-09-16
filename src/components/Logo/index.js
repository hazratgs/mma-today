import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import s from './style.pcss'
import logo from '../../public/images/logo-color.png'

export default class Logo extends PureComponent {
  render () {
    return (
      <Link to='/' className={s.logo} style={{backgroundImage: `url(${logo})`}} />
    )
  }
}
