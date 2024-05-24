![ReeCSS
Intro](https://storage.googleapis.com/hox-io-blog-assets/2024-05-24-reecss.webp)

Ever find yourself tangled in a jungle of SASS, CSS, PostCSS, or CSS modules,
only to realize your colors are living double lives? Two sources of truth for
colors? That’s like having two Netflix accounts—utterly redundant and wholly
unnecessary. It's the stuff of nightmares, really.

If you’re anything like me (and let’s face it, you are, because you’re here),
you live and die by the DRY (Don’t Repeat Yourself) principle. Having to update
colors in two places is a one-way ticket to Migraine City, doubling your
workload and your desire to scream into the void.

Enter REECSS, the superhero we didn't know we needed. The [@recon-struct/reecss]
library is here to rescue us from this madness. Aimed squarely at library
authors, reecss takes a deeply nested object that defines your CSS variables in
code and magics them into, you guessed it, CSS variables available to your
styles. It’s not exactly rocket surgery, but it’s a slick way to have a single
source of truth for your design language variables.

But REECSS isn’t just a DRY savior—it’s a convenience library that tightens the
integration between your CSS and runtime JavaScript. This means the same
variables can be used seamlessly in both your CSS and JavaScript. Whether you're
using React, Vue, or SolidJS, REECSS acts as a bridge, creating smooth,
hassle-free integrations between your CSS and JavaScript. Say goodbye to the
headache of managing style consistency across different parts of your codebase.

## Example Time: Because Seeing is Believing

Let’s break it down with an example. Consider this deeply nested object that
defines our CSS variables:

```typescript
const designSystem = {
  color: {
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#ffffff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#bdbdbd',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      small: '1.5',
      medium: '1.75',
      large: '2',
    },
  },
  breakpoint: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
} as const
```

Run this through REECSS, and voilà! All your CSS variables are produced in a
neat, well-namespaced package:

```typescript
const cssVariables = reecss(designSystem)

// Output:
// {
//   "--color-primary-light": "#7986cb",
//   "--color-primary-main": "#3f51b5",
//   "--color-primary-dark": "#303f9f",
//   "--color-primary-contrastText": "#ffffff",
//   "--color-secondary-light": "#ff4081",
//   "--color-secondary-main": "#f50057",
//   "--color-secondary-dark": "#c51162",
//   "--color-secondary-contrastText": "#ffffff",
//   "--color-error-light": "#e57373",
//   "--color-error-main": "#f44336",
//   "--color-error-dark": "#d32f2f",
//   "--color-error-contrastText": "#ffffff",
//   "--color-background-default": "#fafafa",
//   "--color-background-paper": "#ffffff",
//   "--color-text-primary": "#212121",
//   "--color-text-secondary": "#757575",
//   "--color-text-disabled": "#bdbdbd",
//   "--typography-fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
//   "--typography-fontSize-small": "0.875rem",
//   "--typography-fontSize-medium": "1rem",
//   "--typography-fontSize-large": "1.25rem",
//   "--typography-fontWeight-light": 300,
//   "--typography-fontWeight-regular": 400,
//   "--typography-fontWeight-medium": 500,
//   "--typography-fontWeight-bold": 700,
//   "--typography-lineHeight-small": "1.5",
//   "--typography-lineHeight-medium": "1.75",
//   "--typography-lineHeight-large": "2",
//   "--breakpoint-xs": 0,
//   "--breakpoint-sm": 600,
//   "--breakpoint-md": 960,
//   "--breakpoint-lg": 1280,
//   "--breakpoint-xl": 1920
// }
```

But wait, there’s more! The reecss library also offers a convenience method to
transform these styles into a set of CSS declarations, perfect for injecting
into a stylesheet or inlining in a style attribute.

```typescript
const styleRules = toStyleAttr(cssVariables)
```

And there you have it. No more duplicated efforts, no more inconsistent color
definitions, just pure, unadulterated DRY goodness. Your future self will thank
you, trust me.
