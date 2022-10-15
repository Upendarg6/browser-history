import './index.css'

import {Component} from 'react'

import AppItem from '../AppItem'

const AppItem = props => {
  const {details, delItem} = props
  const {timeAccessed, logoUrl, title, domainUrl} = details
  const del = () => {
    delItem(id)
  }
  return (
    <li className="list-item">
      <div className="img-con">
        <p>{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
        <button className="button" type="button" onClick={del} testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default AppItem
