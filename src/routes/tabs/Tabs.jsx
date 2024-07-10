import React from 'react'
import { NavLink } from 'react-router-dom'

const Tabs = () => {
  return (
    <nav>
        <NavLink to='/all'>All</NavLink>
        <NavLink to='/ui-design'>UI design</NavLink>
        <NavLink to='/ux-design'>UX design</NavLink>
        <NavLink to='/product-design'>Product design</NavLink>
        <NavLink to='/articles'>Articles</NavLink>
        <NavLink to='/tutorials'>Tutorials</NavLink>
        <NavLink to='/news'>News</NavLink>
    </nav>
  )
}

export default Tabs
