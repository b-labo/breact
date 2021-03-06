breact
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/b-labo/breact
[bd_travis_url]: http://travis-ci.org/b-labo/breact
[bd_travis_shield_url]: http://img.shields.io/travis/b-labo/breact.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/b-labo/breact
[bd_travis_com_shield_url]: https://api.travis-ci.com/b-labo/breact.svg?token=
[bd_license_url]: https://github.com/b-labo/breact/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/b-labo/breact
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/b-labo/breact.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/b-labo/breact.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/b-labo/breact
[bd_gemnasium_shield_url]: https://gemnasium.com/b-labo/breact.svg
[bd_npm_url]: http://www.npmjs.org/package/breact
[bd_npm_shield_url]: http://img.shields.io/npm/v/breact.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Browser react utility

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install breact --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

import {mount, create, once} from 'breact'
import IndexComponent from '../components/index_component'

once('DOMContentLoaded', () => {
  let element = create(IndexComponent, {})
  mount('mount-root', element).then(() => {
    // The component is ready.
  })
})

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Functions.md.hbs" Start -->

<a name="section-doc-guides-03-functions-md"></a>

Functions
---------

Available functions

| Signature | Description |
| ---- | ----------- |
| `autobind(context) -> ` | Auto bind methods |
| `create(Component, props, children) -> Object` | Create an element |
| `markup(Component, props, children) -> string` | Create static markup |
| `mount(container, element) -> Promise` | Mount an element into dom |
| `once(event, handler)` | Bind window event once |
| `wrap(Base, spec) -> Object` | Wrap a element with higher order component |


<!-- Section from "doc/guides/03.Functions.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/b-labo/breact/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [b-labo][b_labo_url]
+ [bwindow][bwindow_url]

[b_labo_url]: https://github.com/b-labo
[bwindow_url]: https://github.com/b-labo/bwindow#readme

<!-- Links End -->
