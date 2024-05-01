# EventQueue

A String handling class for TypeScript by Bean Software

```ts
const t = createT({
  home: {
    welcome: 'Welcome {{name}}, to Bean Software',
  },
} as const)

const welcome = t('home.welcome', { name: 'Hans' } as const)
```

# Documentation

- [Documentation](https://BeanSoftwareGroup.github.io/open-source/modules/Create_T.html)

# Contributing

Read the [style guide](https://github.com/BeanSoftwareGroup/workspace/blob/main/STYLE.md#style-guide).
