![ReeCSS Intro](https://storage.googleapis.com/hox-io-blog-assets/2024-05-24-reecss.webp)

Have you ever been waist-deep in a swamp of SASS, CSS, PostCSS, or CSS modules,
only to find yourself cursing the heavens because your precious colors are
living in two separate places? The horror! Two sources of truth for something as
trivial as a color? Unbearable. It’s like having a doppelgänger—confusing,
redundant, and utterly unnecessary.

If you're anything like me (and let's face it, you're reading this, so you
probably are), you despise any solution that violates the sacred DRY (Don't
Repeat Yourself) principle. Two competing sources for something as mundane as a
color can turn a simple refactor into a migraine-inducing nightmare, doubling
the amount of changes you need to make. It’s enough to drive a coder to drink.

Enter REECSS. The [@recon-struct/reecss](https://github.com/recon-struct/reecss)
library aims to banish this chaos to the nether realms of outdated tech forever.
Designed with library authors in mind, reecss takes a deeply nested object that
defines your CSS variables in code and magics them into CSS variables available
to your styles. It’s not rocket science, but it’s a slick way to have a single
source of truth for your design language variables.

Example Time: Because Seeing is Believing Let’s break it down with an example.
Consider this deeply nested object that defines our CSS variables:

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
