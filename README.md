 <img src="assets/images/pon-runner-banner.png" alt="Title Banner"
                    height="148"
                    style="height:148px"
/>


<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/pon-runner
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/pon-runner
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/pon-runner.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/pon-runner
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/pon-runner.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/pon-runner/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/pon-runner
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/pon-runner.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/pon-runner.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/pon-runner
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/pon-runner.svg
[bd_npm_url]: http://www.npmjs.org/package/pon-runner
[bd_npm_shield_url]: http://img.shields.io/npm/v/pon-runner.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Runner for pon

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/00.TOC.md.hbs" Start -->

<a name="section-doc-guides-00-toc-md"></a>

Table of Contents
----------------

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Links](#links)


<!-- Section from "doc/guides/00.TOC.md.hbs" End -->

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install pon-runner --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

Create runner with tasks and pass task names to run

```javascript
'use strict'

const ponRunner = require('pon-runner')

const css = require('pon-task-css')
const browser = require('pon-task-browser')

async function tryExample () {
  let runner = ponRunner({
    'ui:style': css('ui/stylesheets', 'public'),
    'ui:browser': browser('shim/entrypoints', 'public/js')
  })

  // Execute task by names
  await runner.run('ui:style', 'ui:bundle')
}

tryExample()

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/pon-runner/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [Pon][pon_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[pon_url]: https://github.com/realglobe-Inc/pon
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
