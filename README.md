# Huveragy

A simple [Hugo](https://gohugo.io/) partial template that renders a world coverage map using [jQuery Vector Map](https://github.com/10bestdesign/jqvmap/)'s SVG library and dataset from [NaturalEarthData](http://www.naturalearthdata.com/).

## Instalation

Go to your Hugo project, create `layouts/partials` dir and add this repo as submodule:

```shell
mkdir -p layouts/partials
git submodule add git@github.com:icostan/huveragy.git layouts/partials/
```
## Configuration

```shell
cat <EOF > config.toml
[Params.huveragy]
  countries = { "US"=5, "IN"=2, "RO"=5 }
  colors = ['#dc9658', '#d62728']
EOF
```
## Usage

### in HTML pages

Just add the following snippet to any HTML page to display the coverage map.

```html
{{ partial "huveragy/huveragy.html" }}
```

### in Markdown pages

A bit more complicated since Hugo does not allow mixing of Markdown and code/variables but rest assured, I've got this for you. Note the `.` (dot) after `(.Get 0)`, that is important, that is Hugo's context.

First of all, create a `shortcode` called `partial` with the following content.

```shell
mkdir -p layouts/shortcodes
cat <EOF > layouts/shortcodes/partial.html
{{ partial (.Get 0) . }}
EOF
```

Then drop the following snippet in any Markdown page to display the coverage map. Notice the extra `<` and `>` brackets to render our little `partial` shortcode that in turns renders our `huveragy` partial template.

```markdown
{{< partial "huveragy/huveragy.html" >}}
```

## Roadmap

- [X] world coverage
- [X] continent coverage
- [ ] country coverage: at states/regions/counties level
- [ ] auto-load required JS files based on configuration
- [ ] configurable text for "onTipShow" event
- [ ] DRY everything
- [ ] distribute JS/CSS/HTML files via cdnjs.com
- [X] try jqvmaps instead jvectormaps library, better options support
