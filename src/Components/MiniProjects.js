import React from 'react'
import MySidebar from './MySidebar'
import { Outlet } from 'react-router-dom'

const MiniProjects = () => {
  return (
    <div className="mini-projects-container">
      <div className="sidebar"><MySidebar /></div>
      <div className="content-area"><Outlet /></div>
    </div>
  )
}

export default MiniProjects
