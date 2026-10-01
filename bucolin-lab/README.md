# BUCOLIN lab website

The site of the Boğaziçi University Computational Linguistics Lab, served from this
folder at <https://sb-b.github.io/bucolin-lab/>.

It is plain HTML, CSS and JavaScript. There is nothing to build or install: edit a file,
commit, and the page is live a minute or two later.

## Updating the content

Everything you would normally want to change is in `data/`. Each file starts with a short
note on its format.

| To change               | Edit                   |
| ----------------------- | ---------------------- |
| News and announcements  | `data/news.js`         |
| People                  | `data/people.js`       |
| Projects                | `data/projects.js`     |
| Papers                  | `data/publications.js` |
| Address and intro       | `data/lab.js`          |
| Menu and button labels  | `data/strings.js`      |

The page titles and descriptions that search engines and link previews read are not in
`data/`; they are in the `<head>` of each `.html` file.

The site is in English and Turkish. Text that differs between the two is written as a pair,
each half between backticks:

```js
now: {
  en: `M.S. student at Saarland University`,
  tr: `Saarland Üniversitesi'nde yüksek lisans öğrencisi`,
},
```

If the `tr` half is missing, the English text is shown in its place.

### Adding a news item

Open `data/news.js`, copy one of the blocks, paste it above the others and change the text.
Give it a new `id`. Links inside the text are written `[like this](https://example.org)`,
and `**two stars**` on each side make words bold.

The home page always shows the three newest items.

### Things to watch for

- A missing comma or quote in a data file leaves that page empty. If a page goes blank
  after an edit, that is where to look (the browser console names the line).
- An id listed under `papers` (in `projects.js`) or `advisors` (in `people.js`) has to match
  the id of the paper or the faculty member letter for letter. One that does not is skipped,
  with a note in the console.
- Inside backticks you can type apostrophes and quotation marks freely. The labels in
  `data/strings.js` are in ordinary quotes, so an apostrophe there has to be the curly
  one (`’`).
- File and folder names are lower-case and case matters once the site is on GitHub.

## Looking at it locally

Opening `index.html` in a browser works. To see it the way GitHub serves it:

```sh
python3 -m http.server
```

from the repository root, then <http://localhost:8000/bucolin-lab/>.

## How it is put together

```
index.html, news.html, ...   one small file per page; the content is filled in by the scripts
css/site.css                 all the styling, colours for both themes at the top
data/                        the content
js/prefs.js                  picks the theme and language before the page is drawn
js/site.js                   header, footer, language and theme switches, shared helpers
js/parts.js                  news items, projects and papers, as they appear on several pages
js/home.js, news.js, ...     one per page
img/                         the lab logo (logo-dark.png is the same logo recoloured for the dark
                             theme), the icons, and the picture shown when a link is shared
```

The site opens in English; the EN / TR button in the header switches it, and the choice
is remembered. A link can ask for a language with `?lang=tr` or `?lang=en`. The theme
follows the visitor's system until they pick one with the button next to it.

If the folder is ever renamed or moved, the site's address is written out in the `<head>`
of each `.html` file (the `canonical` and `og:` lines) and at the top of this file.

The rest of this repository is a Jekyll site. Jekyll copies this folder as it is, as long
as no file in it begins with a `---` line and nothing is named with a leading underscore.
Please keep this as the only Markdown file in here: Jekyll would turn any other `.md` file
into a page of the personal site.
