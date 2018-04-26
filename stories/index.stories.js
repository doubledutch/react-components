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

import React from 'react'

import '../src/base.css'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('button', module)
  .add('with text', () => <div className="vertical space-children">
    <div className="horizontal space-children">
      <button>Primary</button>
      <button disabled>Disabled</button>
      <pre>button.primary</pre>
    </div>
    <div className="horizontal space-children">
      <button className="secondary">Secondary</button>
      <button className="secondary" disabled>Disabled</button>
      <pre>button.secondary</pre>
    </div>
    <div className="horizontal space-children">
      <button className="destructive">Destructive</button>
      <button className="destructive" disabled>Disabled</button>
      <pre>button.destructive</pre>
    </div>
  </div>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
