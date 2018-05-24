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

import { setAddon, storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../src/base.css'
import {Avatar} from '../src'
import {TextInput} from '../src'

setAddon(JSXAddon)

storiesOf('base.css', module)
  .addWithJSX('button', () => <div className="vertical space-children">
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
  .addWithJSX('Link', () => <div>
    <a href="https://doubledutch.me">DoubleDutch</a> and&nbsp;
    <a href="https://google.com">Google</a> and&nbsp;
    <a href="https://microsoft.com">Microsoft</a>
  </div>)
  .addWithJSX('Inputs', () => <div className="vertical space-children">
    <p>See also Components/Inputs</p>
    <label>
      Text field label
      <input type="text" placeholder="Text field placeholder" />
    </label>
    <label>
      Text field label
      <input type="text" placeholder="Text field placeholder" />
      <div className="instructions">Text field specific instructions</div>
    </label>
    <label>
      Text field label
      <input type="text" placeholder="Text field placeholder" value="Invalid input" />
      <div className="error">Invalid input ist verboten!</div>
    </label>
    <label>
      Text field label
      <input type="text" placeholder="Disabled" disabled />
    </label>
    <label>
      Text field label
      <input type="text" placeholder="Search" className="search" />
    </label>
    <label>
      Text area label
      <textarea placeholder="Text area placeholder"></textarea>
    </label>
  </div>)
  .addWithJSX('radio', () => <div className="vertical space-children">
    <label><input type="radio" name="my-radio" /> Option 1</label>
    <label><input type="radio" name="my-radio" /> Option 2</label>
    <label><input type="radio" name="my-radio" /> Option 3</label>
    <label><input type="radio" name="my-radio" disabled /> Disabled</label>
  </div>)

const noFace = {
  firstName: 'Jean',
  lastName: 'Valjean',
}

const withFace = {
  firstName: 'Jean',
  lastName: 'Valjean',
  image: 'https://images.amcnetworks.com/bbcamerica.com/wp-content/blogs.dir/55/files/2012/12/Hugh-Jackman-Les-Miserables.jpg',  
}

storiesOf('Components', module)
  .addWithJSX('Avatar', () => <div className="vertical space-children">
    <div className="horizontal space-children">
      <Avatar user={noFace} size={5} units="em" />
      <Avatar user={noFace} size={3} units="em" />
      <Avatar user={noFace} size={1} units="em" />
      <pre>units="em"</pre>
    </div>
    <div className="horizontal space-children">
      <Avatar user={withFace} size={5} units="em" />
      <Avatar user={withFace} size={3} units="em" />
      <Avatar user={withFace} size={1} units="em" />
      <pre>units="em"</pre>
    </div>
    <div className="horizontal space-children">
      <Avatar user={noFace} size={15} units="vh" />
      <Avatar user={noFace} size={10} units="vh" />
      <Avatar user={noFace} size={5} units="vh" />
      <pre>units="vh"</pre>
    </div>
    <div className="horizontal space-children">
      <Avatar user={withFace} size={15} units="vh" />
      <Avatar user={withFace} size={10} units="vh" />
      <Avatar user={withFace} size={5} units="vh" />
      <pre>units="vh"</pre>
    </div>
    <div className="horizontal space-children">
      <Avatar user={noFace} size={100} />
      <Avatar user={noFace} size={60} />
      <Avatar user={noFace} size={20} />
      <pre>units="px"</pre> (default)
    </div>
    <div className="horizontal space-children">
      <Avatar user={withFace} size={100} />
      <Avatar user={withFace} size={60} />
      <Avatar user={withFace} size={20} />
      <pre>units="px"</pre> (default)
    </div>
  </div>)
  .addWithJSX('Inputs', () => <div className="vertical space-children">
    <div className="horizontal space-children">
      <TextInput
        style={{flex:1}}
        label="Text field label"
        placeholder="Placeholder"
        hasError={true}
        errorText="Input with error"
        instructions="Instructions"
      />
      <pre style={{flex:1}}>&lt;TextInput ... /&gt;</pre>
    </div>
    <div className="horizontal space-children">
      <TextInput
        style={{flex:1}}
        label="Field with max length"
        placeholder="Placeholder"
        hasError={false}
        instructions="Max 50 characters"
        maxLength="50"
      />
      <pre style={{flex:1}}>&lt;TextInput maxLength={50} ... /&gt;</pre>
    </div>
    <div className="horizontal space-children">
      <TextInput
        style={{flex:1}}
        placeholder="Search"
        hasError={false}
        icon="search"
      />
      <pre style={{flex:1}}>&lt;TextInput maxLength={50} ... /&gt;</pre>
    </div>
    <div className="horizontal space-children">
      <TextInput
        multiline
        style={{flex:1}}
        label="Field with max length"
        placeholder="Placeholder"
        hasError={false}
        instructions="Max 500 characters"
        maxLength="500"
      />
      <pre style={{flex:1}}>&lt;TextInput multiline maxLength={500} ... /&gt;</pre>
    </div>
  </div>)
