* Huveragy

A simple [Hugo](https://gohugo.io/) partial template that renders a world coverage map using [jVectorMap](https://jvectormap.com/)'s excelent SVG library and map dataset from [NaturalEarthData](http://www.naturalearthdata.com/).

*** Instalation

Create `partials` dir and add this repo as submodule:

```shell
mkdir -p layouts/partials
git submodule git@github.com:icostan/huveragy.git layouts/partials/
```
*** Configuration

```shell
cat <EOF > config.toml
[Params.huveragy]
  colors = ['#C8EEFF', '#0071A4']
  url = "/js/huveragy.json"
EOF
```
*** Coverage data

By default it loads project's default coverage file but it can be configured to load coverage data from anywhere.

```shell
cat <EOF > static/js/huveragy.json
{
  "home": "RO",
  "world": {
    "AU": 1,
    "BR": 1,
    "FR": 2,
    "US": 5,
    "VN": 1
  }
}
EOF
```

*** Usage

*** in HTML pages

Just add the following snippet to any HTML page to display the coverage map.

```html
{{ partial "huveragy/huveragy.html" }}
```

*** in Markdown pages

A bit more compicated since Hugo does not allow mixing of Markdown and code/variables but rest assured, I've got this for you. Note the `.` (dot) after `(.Get 0)`, that is important, that is Hugo's context.

First of all, create a `shortcode` called `partial` with the follosing content.

```shell
mkdir -p layouts/shortcodes
cat <EOF > layouts/shortcodes/partial.html
{{ partial (.Get 0) . }}
EOF
```

Then drop the following snippet in any Markdown page to display the coverage map. Notice the extra `<` and `>` brakets to render our little `partial` shortcode that in turns renders our `huveragy` partial template.

```markdown
{{< partial "huveragy/huveragy.html" >}}
```

** Roadmap
	- [X] world coverage
	- [ ] support the continents
	- [ ] country coverage: at states/regions/counties level
	- [ ] auto-load required JS files based on configuration
	- [ ] configurable text for "onTipShow" event
	- [ ] DRY everything
	- [ ] distribute JS/CSS/HTML files via cdnjs.com
