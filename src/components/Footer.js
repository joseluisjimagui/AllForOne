import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">LinkedIn</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">GitHub</a>
          </li>
        </ul>
      </div>
    )
  }
}
