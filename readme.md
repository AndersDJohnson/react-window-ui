# react-window-ui 🖼✨

[![Greenkeeper badge](https://badges.greenkeeper.io/coston/react-window-ui.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/coston/react-window-ui.svg)](https://travis-ci.org/coston/react-window-ui)
[![npm version](https://badge.fury.io/js/react-window-ui.svg)](https://www.npmjs.com/package/react-window-ui)
[![npm](https://img.shields.io/npm/dm/react-window-ui.svg)](https://www.npmjs.com/package/react-window-ui)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

## Demo & Examples

Live demo: [coston.io/react-window-ui](https://coston.io/react-window-ui/)

## What

React components for fast presentational window ui.

## Installation

```bash
npm install --save react-window-ui
```

## Window UI

- Browser (Like Mac OS X window UI)
- Terminal (Like Hyper terminal)
- MacTerminal (Like Mac OS X terminal)

### Input

```js
import React from "react";
import { Browser } from "react-window-ui";

export default () => (
  <Browser>
    <h1>wow</h1>
  </Browser>
);
```

## Options

| Prop        | Type      | Description                                               |
| ----------- | --------- | --------------------------------------------------------- |
| topbarTitle | `string`  | title of the topbar                                       |
| barHeight   | `string`  | height of the topbar                                      |
| divider     | `string`  | css border values of topbar border-bottom                 |
| padding     | `string`  | css padding of content window (singular value, e.g., `.5em`) |
| topbarColor | `string`  | color of topbar                                           |
| background  | `string`  | color of main content window                              |
| border      | `string`  | css border values of outer border                         |
| grayscale   | `boolean` | sets ui button to greyscale instead of red, yellow, green |
| boxShadow   | `string`  | customize box shadow styles                               |

## Development

```bash
npm run build
```

## Contributing

Please help make this react component better. Submit any issue and/or make a pull request!

### To Do

- Write some good tests

## License

Licensed under the GNU General Public License v3.0.
