# juliaebert.com

> Julia Ebert's personal website

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm nuxi dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

# Update the packages
$ npm update
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Creating It

[Basic static site
setup (including deploying to Netlify)](https://scotch.io/tutorials/build-a-server-side-rendered-vue-app-with-nuxtjs)

[Using Bulma and Sass with Nuxt](https://medium.com/@mlars84/nuxt-bulma-sass-for-beginners-426aba0153ba)

## Modifying It

_A summary of the main components._

### Site Config (`nuxt.config.js`)

This contains the general site names/descriptions included by default in Nuxt, as well as specifying icons, additional fonts from Google Fonts, custom CSS, Material Design Icons, and Google Analytics ID.

Particularly for this site setup are the `navItems` found under `env`. This uses key/value pairs to specify the items that will appear in the top menu bar. The key is the name as it appears in the menu, and the value is the link location (relative to the root).

### Icons

By default, the icons that appear throughout the site are determined by matching the slug of the section title (hacky, I know). Icons are pulled from `/public/imgs/icons`, so you just need to put in SVG file there with a name matching the page slug. To see the details or change this, look at `/components/PrimarySection.vue`. Within a `PrimarySection`, you can change the icon using the `icon` property (specifying the name of an SVG file, with no extension, in `imgs/icons`) -- e.g., use `icon='hello'` to use the file `/public/imgs/icons/hello.svg`.

### Home

The options for the typewriter text on the home page are currently stored in the home page layout (`/layouts/home.vue`), which I plan to eventually change.

The background image for the text is specified in the CSS (`main.scss` `.bg-img`).

The particles specifications are in `assets/particles.json`. You can generate/customize a configuration [here](https://vincentgarreau.com/particles.js/).

### Managing Publication Records

The list of publications that can be used in a `PublicationList` component are stored as a JSON file in `/assets/publications.json`. It's essentially a hacky JSON version of `.bib` files. The contents are formatted into something that roughly approximates the ACM citation format. This can be modified in `/components/Publication.vue`.

Note that each entry can contain a `file` option; this should specify a relative location to `/public/pdfs/<TYPE>`, where `<TYPE>` is the type of publication (e.g., `inproceedings`, `poster`, article`). All PDFs of papers/posters should be placed in these folders.

### Footer

To modify the contents, go to `/components/MyFooter.vue`.

## Layout/Pages

### Page

By default, pages have the `default` layout, which is what you want for most content pages. The index uses the `home` layout, and stuff like error pages (404) use the `simple` layout.

The main component of the `default` layout is the `<primary-section>` component (one per page). This defines the textured background and the white box that all contains all the content, described below.

### CV

While the CV still uses the same default layout as every other content page, it contains some additional complications.

For mostly historical reasons (aka I haven't gotten around to changing this), the actual content of the CV is stored in `/pages/cvContent.vue`, rather than in `/pages/cv.vue` (which contains the layout and simply includes the content page). If you want to edit the contents of the CV, edit the `cvContent` page. The details of the CV components are discussed below.

This page is also designed with the capability to print the page itself to generate a PDF of the CV. (Go to the CV webpage and hit `Ctrl`+`P` to see it in action.) This hides the webpage interface and uses variants of some CSS styles to achieve a different look for print vs screen media.

Additionally, you can choose to include information in the print and online versions. (I use this vary what the Publications section looks like) This is achieved through the `is-print-only` and `is-screen-only` classes. Simply add the `is-print-only` class to any HTML component that you want only to appear when the page is printed, and vice versa; it will apply to all of the child classes as well.

You can use the browser print interface (I'm using Chrome) to adjust things like margins when printing to PDF (and removing the URL bars), but occasionally it cuts lines of text in half or splits up sections weirdly. To hackily solve this, you can insert `<span class="page-break"></span>` to manually add a page break in the printed version of the CV; this will have no effect on the web view.

When I include a link to "View PDF" on the page, I do this by generating the PDF by printing from the browser, then including the PDF as a file in the static files.

## Components

The source for each of these can be found in `/components`, for additional details I forgot to include. For now I'm leaving out the smaller ones that are more self-explanatory.

### Primary Section

The primary section is (as described above), basically the root component of the default layout. As seen in the existing pages, you can use it to specify a displayed page title, subtitle, and intro text.

The title and subtitle are specified as props in the `<primary-section>` component. This component also specifies the background texture of the page with the `texture` prop. If no texture is given, it will be a plain color.

Within a `PrimarySection`, you can change the icon using the `icon` property (specifying the name of an SVG file, with no extension, in `imgs/icons`) -- e.g., use `icon='hello'` to use the file `/public/imgs/icons/hello.svg`. If you don't specify the `icon`, it will match the slug of the section title.

The intro text is a slot within the component, used as `<div slot="intro">...` This lets you do multiple paragraphs or longer text content.

You can also include button links in the top of the page with the `link` slot. Within each of these, you can include multile `<icon-button-links>`, which are used like:

```HTML
<icon-button-link
    to="/path/to/target"
    icon="file-pdf-box">
    Button Text
</icon-button-link>
```

where the icon is a [Material Design Icon](https://materialdesignicons.com/). The `to` path can be relative or absolute; it's basically an `href`.

All other components on a default layout page should be children of this element (within a single div, because it's going into a Vue `slot`).

### Project

A project is the component to use if you want to show off multiple featured things; it's what I used for the Research, Side Projects, and Media Pages. You can put a bunch after each other within your PrimarySection, and they'll be nicely formatted to alternate layouts and background colors.

Like the PrimarySection, it has props for the title and subtitle. It also has props for `img-src` and `video-src`, to specify the image or video you want to appear on one side of the project section. If you don't specify either, the text will automatically fill the whole width. If you specify both, I don't remember how it will behave; just don't.

If you include an image, you can also choose how it will be formatted. There are boolean properties `is-cover` and `is-mockup`, which default to False. (Use only one!)

- If neither is set, the image will not be cropped and will have padding around it; this is a good choice if it's a graph or contains text that you don't want cut out.
- `is-cover` will crop and scale the image (around the center point) to fill the available space next to the text.
- `is-mockup` will place the image in a mockup of a laptop screen, which is useful for showing screenshots. If using this option, you can also specify the `mobile-img-src` prop, which will display an additional screenshot in a mockup of a smartphone screen. If this isn't set, it will just show the laptop without the phone.

Videos will also be subjected to the `is-cover` prop, but not `is-mockup`. These will be shown like a GIF: autoplaying, looping, and muted. This is preferred to using a GIF because of its much smaller file size and better video/image quality.

The main slot of the Project is used for describing the project, and may also include tags and links. Tags are just little blocks with text; they're not even links to anything. To use multiple tags, just separate them with a comma:

```HTML
<tags tags="Python, Django, Wagtail CMS"></tags>
```

To include nicely-formatted links with Material Design Icons, use the `<icon-link>` component:

```HTML
<icon-link
    icon="github"
    to="https://github.com/jtebert/lazy-baker">
    View on GitHub
</icon-link>
```

Finally, the Project has a slot for `results`, which is a formatted section to include a short filtered PublicationList (more below). It might look something like this:

```HTML
<div slot="results">
    <publication-list
        highlight-author="Ebert"
        :pub-key-filter="['ebert2019csgf', 'ebert2018aamas']">
    </publication-list>
</div>
```

### Publication List

A publication list is a formatted set of publications with links, drawn from `/assets/publications.json`. It will generate a reverse-chronological list of citations with links to the PDFs on the left side (if a file is provided). When a publication list is printed (as in the CV), it is formatted as a more typical list of publications -- i.e., without the links to PDFs on the left.

To highlight yourself, you can specify the `highlight-author` prop. Any author names containing this as a substring will be shown in bold.

There are also three types of filters you can specify to the list of publications to display. They can be used together, but that's not always useful.

- `pub-key-filter` lets you specify precisely which publications to include. pub-keys are unique (they are the keys in the JSON file), so you can explicitly only include individual publications. Ex: `<publication-list :pub-key-filter="['ebert2019csgf', 'ebert2018aamas']"></publication-list>`
- `type-filter` lets you include only publications of a certain `type`, such as posters. Ex: `<publication-list :type-filter="['inproceedings', 'article']"></publication-list>`
- `keyword-filter` is useful to get all papers on a particular topic, without having to explicitly include all their publication keys. Ex: `<publication-list :type-filter="['kilobots']"></publication-list>`

### CV/Resume Components

There is no "parent" CV component; it's just putting a bunch of these sub-components together sequentially. All of these elements are responsive, and designed to be printable (as described above).

However, if you look at `cvContent.vue`, there is an item with the class `cv-header`, which is used to specify what the header of the CV looks like in the printed/PDF version, so modify this to your liking.

Separate sections with H2 headers, as these are what is used for making nice formatting on the page, and especially in the print version.

For all components, date ranges should be separated with `--`, which will be re-formatted to the "correct" endash.

_Note: The CV components are all done with CSS `flex`. It's supported fine by all current major browsers except Internet Explorer. IMO, if you're still using IE, that's on you and you don't get to see a nice-looking CV._

#### CV Award

This is used for listing very simple elements like awards, which include only a date (or date range) and a one-line description.

```HTML
<cv-award date="2013" award="DAAD Undergraduate Scholarship"></cv-award>
```

#### CV Skill

This is used for a grouping of simple elements, like listing skills, courses, or activities in a category. It includes a short description, and a list of elements:

```HTML
<cv-skill
    category="Programming"
    :skills="[
    'Python', 'MATLAB', 'C/C++', 'JavaScript', 'Java']"
></cv-skill>
```

#### CV Entry

This is the more-typical, complex, CV entry, which includes a lot more options, all specified as props:

- `title`: Probably the employer. It's the main thing in bold on the first line.
- `location`: It goes on the top line in the left column, so keep it short. This is hidden in the mobile view.
- `subtitle`: It goes below the `title`. Perhaps for a job title. For my academic stuff, though, it's often the name of my advisor.
- `dates`: You can optionally specify dates for the whole item, which will be displayed next to the subtitle. Use this if you're using it like a typical resume, with your position as the subtitle.
- `tasks`: A list of either: (1) objects containing `date` (optional), `task`, and `description` (optional); or (2) strings (description only). The date goes in the left column, the task in the right. I use it for listing research projects. In the simple list-of-strings form, this is useful for a list of tasks in a single job, like a typical resume entry. (Example below)
- `tasks-first`: You may want to include the `tasks` elements before the `subtitle` (default behavior is subtitle first, then tasks). In my education section, I use this to list my degree above details like my GPA and thesis details.
- `bulleted`: You can turn off the bullets on the tasks list by specifying `:bulleted="false"`. I'm not currently using this anywhere, but it might be helpful, so I'm giving you options.

Here are some examples of many varied ways you can use the `<cv-entry>` component.

A "typical" resume entry: (Note that this uses a list of strings for tasks, rather than each task as an object)

```HTML
<cv-entry
    location="Boston, MA"
    title="MadeUp Industries"
    subtitle="Lead Developer"
    dates="2017--2019"
    :tasks="['Created 10,000 new jobs by outsourcing my work',
             'Generated a paradigm shift']"
></cv-entry>
```

Multiple tasks with no subtitle, to list teaching positions:

```HTML
<cv-entry
    location="Cambridge, MA"
    title="Harvard University"
    :tasks="[
        {date: 'Fall 2018, Fall 2019',
            task: '<b>Guest lecture</b>, CS 289: Biologically-inspired Multi-agent Systems'},
        {date: 'Spring 2018',
            task: '<b>Teaching fellow,</b> CS 189: Autonomous Robot Systems'}]"
></cv-entry>
```

Multiple research projects within a single group:

```HTML
<cv-entry
    location="Cambridge, MA"
    title="Harvard University Self-Organizing Systems Research Group"
    subtitle="Prof. Radhika Nagpal"
    :tasks="[
        {date: '2016 --',
            task: 'Multi-feature perception and decision making in robot collectives',
            description: 'Developing Bayesian and bio-inspired algorithms for collective decision-making in Kilobot robots, in both simulation and physical robots, including developing a parallelized, high-throughput Kilobot simulator.'},
        {date: '2017 --',
            task: 'LARVAbot: Locomotion of autonomous robots via aggregation',
            description: 'Designing and manufacturing a collective of 3D-printed robots to perform aggregate locomotion, inspired by the movement of sawfly larvae.'},]"
></cv-entry>
```

Multiple degrees at a single institution: (Note the optional use of `tasks-first` and `bulleted`)

```HTML
<cv-entry
    tasks-first
    :bulleted="false"
    location="Cambridge, MA"
    title="Harvard University"
    subtitle="Advisor: Prof. Radhika Nagpal"
    :tasks="[
        {date: '2016 --',
            task: 'PhD Candidate in Computer Science'},
        {date: '2019',
            task: 'SM in Computer Science'}]"
></cv-entry>
```
