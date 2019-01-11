import React, { Component } from 'react'

import { titleCase } from '../bin/helpers.js'
import '../styles/Input.css'

class Input extends Component {

    render() {
      const { invalid, errorMessage='error' } = this.props

      return (
        <label className="Input">
          <span>{ titleCase(this.props.name) }</span>
          <input className={ invalid ? 'invalid': '' } {...this.props} />
          { invalid 
              ? <span className="invalid">{ errorMessage }</span>
              : undefined
          }
        </label>
      )
    }
  }

export default Input