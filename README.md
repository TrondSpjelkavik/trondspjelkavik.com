# Nextjs Portfolio

### Website: https://www.trondspjelkavik.com

# In the code

## Components Folder

### GlobalLayout

GlobalLayout includes Meta, Nav, GlobalLayoutContainer and Footer components.

1. Meta

- Takes (title, keywords, description, icon and icon_apple) as props.
- Props can be changes on each side, and link it to an API. ex from projects page:

` <Meta title={title} description={description} ></Meta>`

- Includes defaultProps.

1. Contact

Contact form uses `react-hook-form` for validation. With the functions:

- register
- handleSubmit
- errors

2. ProjectNav

The nav in projects uses call to internal API to change the active class, and changes the content in the projectContainer.

- projectNumber makes a call to the API and changes the number in an API call ex:
  `projectNumber = 2`
  gives:
  `content[2].content from an API.`

3. Animation

The animation uses svg and path with transform=matrix. It uses 1 circle and on 1/2 circle to create the effect that the leaf is behind the "globe".

4. Chart

Chart data is collected from internal API, and the css changes when a % grows or shrinks.
`style={{ width: experience[0].percentage - 10 + "%" }}`

5. Hamburger

Hamburger uses styled-components and useState to create the effects. ex:

`background-color: ${({ open }) => (open ? "white" : "#db6400")};`
and
`const [open, setOpen] = useState(false);` , `onClick={() => setOpen(!open)`

# Pages

1. Global

- Meta
- Nav
- Children
- Footer

2. Projects

- Meta
- Projects component
- API call

To make an api call inside the pages you use `getStaticProps` and fetch the api.
To retrieve the data, you use the return and props: { apiCall }

3. Contact

- Meta
- ContactForm

# Styled Components in Nextjs

Using styled components in Nextjs can trow an warning, and to solve this we need to install the packages:

- babel-plugin-module-resolver
- babel-plugin-styled-components

Create a .babelrc and include:

```
{
"presets": ["next/babel"],
"plugins": [
[
"module-resolver",
{
"root": ["./"],
"alias": {
"~components": "./components"
}
}
],
[
"styled-components",
{ "ssr": true, "displayName": true, "preprocess": false }
]
]
}

```

# Dependencies

1. react-hook-form
2. react-icons
3. styled-components

# Internal API

I used two .js files to create two path to the API. paths:

- api/portfolio/
- api/portfolio/projects

Inside the API folder:

Import the .js files. ex:

`import { portfolio } from "../../../api";`

handler function with status and convert to json:

` res.status(200).json(portfolio);`

Now you can call the API and get json back:

`fetch("http://localhost:3000/api/portfolio/");`

If you want to change the path that checks if the app/site is in production, you can use this code:

` const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com' `

and change the following code:

`fetch("http://localhost:3000/api/portfolio/");`

To

`fetch("${server}/api/portfolio/");`

### Question?

- trond.spjelkavik@gmail.com
