import React, { PureComponent } from 'react'
import Logo from '../../components/Logo'
import HeaderNav from '../../components/HeaderNav'
import s from './style.pcss'

export default class Header extends PureComponent {
  render () {
    return (
      <div className={s.header}>
        <div className={s.wrapper}>
          <Logo/>
          <HeaderNav/>
        </div>
      </div>
    )
  }
}
