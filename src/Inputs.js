/*
 * Copyright 2018 DoubleDutch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { PureComponent } from 'react'

export class TextInput extends PureComponent {
  state = {value: ''}
  inputRef = React.createRef()
  render() {
    const {className, errorText, hasError, instructions, label, style} = this.props

    return (
      <label className={className} style={style}>
        {label}
        {this.renderInput()}
        {!!hasError && <div className="error">{errorText || 'Invalid input'}</div>}
        {!!instructions && <div className="instructions">{instructions}</div>}
      </label>
    )
  }

  renderInput() {
    const {maxLength, multiline, placeholder, icon, value} = this.props
    const renderInputElement = () => multiline
      ? <textarea ref={this.inputRef}
                  placeholder={placeholder}
                  value={value}
                  onChange={this.onChange}
                  className={`${maxLength > 0 ? ' with-char-count':''}${icon ? ' with-icon':''}`}
                  maxLength={maxLength || null} />
      : <input ref={this.inputRef}
               type="text"
               placeholder={placeholder}
               value={value}
               onChange={this.onChange}
               className={`${maxLength > 0 ? ' with-char-count':''}${icon ? ' with-icon':''}`}
               maxLength={maxLength || null} />

    if (maxLength || icon) {
      const remaining = maxLength - (value||(this.inputRef.current ? this.inputRef.current.value : '')).length
      return (
        <div className="input-container">
          {renderInputElement()}
          {icon != null && icon({className: 'input-icon'})}
          {maxLength > 0 && <div className={`input-char-count${remaining > 0 ? '':'-capacity'}`}>{remaining}</div>}
        </div>
      )
    }
    
    return renderInputElement()
  }

  onChange = e => {
    this.setState({value: e.target.value})
    this.props.onChange && this.props.onChange(e)
  }
}
