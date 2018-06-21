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
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'

import '../src/base.css'
import {Avatar} from '../src'
import {TextInput} from '../src'
import {AttendeeSelector} from '../src'
import DateTimePicker from '../src/DateTimePicker'

setAddon(JSXAddon)

const attendees = [{firstName:'Jean',lastName:'Valjean'},{firstName:'Cosette',lastName:'Pontmercy'},{firstName:'Marius',lastName:'Pontmercy'}]

storiesOf('base.css', module)
  .addWithJSX('button', () => <div className="vertical space-children">
    <div className="horizontal space-children">
      <button className="dd-bordered">Primary</button>
      <button className="dd-bordered" disabled>Disabled</button>
      <pre>button.dd-bordered</pre>
    </div>
    <div className="horizontal space-children">
      <button className="dd-bordered secondary">Secondary</button>
      <button className="dd-bordered secondary" disabled>Disabled</button>
      <pre>button.dd-bordered.secondary</pre>
    </div>
    <div className="horizontal space-children">
      <button className="dd-bordered destructive">Destructive</button>
      <button className="dd-bordered destructive" disabled>Disabled</button>
      <pre>button.dd-bordered.destructive</pre>
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
      <input className="dd-bordered" type="text" placeholder="Text field placeholder" />
    </label>
    <label>
      Text field label
      <input className="dd-bordered" type="text" placeholder="Text field placeholder" />
      <div className="instructions">Text field specific instructions</div>
    </label>
    <label>
      Text field label
      <input className="dd-bordered" type="text" placeholder="Text field placeholder" value="Invalid input" />
      <div className="error">Invalid input ist verboten!</div>
    </label>
    <label>
      Text field label
      <input className="dd-bordered" type="text" placeholder="Disabled" disabled />
    </label>
    <label>
      Text field label
      <input type="text" placeholder="Search" className="dd-bordered search" />
    </label>
    <label>
      Text area label
      <textarea className="dd-bordered" placeholder="Text area placeholder"></textarea>
    </label>
  </div>)
  .addWithJSX('radio', () => <div className="vertical space-children">
    <label className="custom-radio"><input type="radio" checked={false} name="radio" />Default <span className="checkmark"/></label>
    <label className="custom-radio"><input type="radio" checked={true} name="radio" />Selected <span className="checkmark"/></label>
    <label className="custom-radio"><input type="radio" checked={false} name="radio" disabled />Disabled <span className="checkmark"/></label>
  </div>)
  .addWithJSX('checkBox', () => <div className="vertical space-children">
  <label><input type="checkBox" name="my-checkBox" /> Default</label>
  <label><input type="checkBox" name="my-checkBox" disabled /> Disabled</label>
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
        icon={({className}) => <FontAwesomeIcon icon={faSearch} className={className} />}
      />
      <pre style={{flex:1}}>&lt;TextInput maxLength={50} icon={'{...}'} ... /&gt;</pre>
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
  .addWithJSX('Selectors', () => <div className="vertical space-children">
    <span><pre style={{flex:1}}>&lt;AttendeeSelector ... /&gt;</pre> An attendee-specific wrapper for Selector.</span>
    <div className="horizontal space-children">
      <AttendeeSelector
        client={{getAttendees: () => Promise.resolve(attendees)}}
        searchTitle="Select Admins"
        selectedTitle="Current Admins"
        onSelected={a => window.alert(`${JSON.stringify(a)} selected. onSelected must update state accordingly.`)}
        onDeselected={a => window.alert(`${JSON.stringify(a)} deselected. onSelected must update state accordingly.`)}
        selected={attendees}
      />
    </div>
  </div>)
  .addWithJSX('DateTimePicker', () => <div className="vertical space-children">
    <div className="horizontal space-children">
      <DateTimePicker
        timeZone="America/New_York"
        value={new Date('2018-05-01T12:00:00Z')}
        onChange={date => console.log(`Selected: ${date}`)}
      />
      <pre>&lt;DateTimePicker value={`{new Date('2018-05-01T12:00:00Z')}`} timeZone="America/New_York" ... /&gt;</pre>
    </div>
  </div>)
