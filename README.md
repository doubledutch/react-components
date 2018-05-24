# @doubledutch/react-components

A library of React components and styles for use within DoubleDutch products.

By using these styles and components, UI can easily match the DoubleDutch look and feel.

## Demo

Visit the [interactive demo][interactive-demo] powered by
[Storybook](https://storybook.js.org/).

## Usage

```javascript
import '@doubledutch/react-components/lib/base.css' // Get DoubleDutch standard CSS.
import {Avatar, TextInput} from '@doubledutch/react-components'
```

See the live [interactive demo][interactive-demo] for individual components and styles.

## Updating

1. Make style or component changes
   - Make CSS changes to [src/base.css](./src/base.css)
2. Observe changes in Storybook: `npm start`   
3. Submit a pull request

To update the [interactive demo][interactive-demo], run `npm run deploy-storybook`. Write permissions
to https://github.com/doubledutch/react-components are required.

[interactive-demo]: https://doubledutch.github.io/react-components
