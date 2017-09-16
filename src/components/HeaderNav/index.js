import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.pcss'

export default class HeaderNav extends PureComponent {
  render () {
    return (
      <div className={s.block}>
        <NavLink to='/'>Новости</NavLink>
        <NavLink to='/'>Видео</NavLink>
        <NavLink to='/'>Бойцы</NavLink>
        <NavLink to='/'>Календарь</NavLink>
      </div>
    )
  }
}
