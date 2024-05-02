const PATTERN = /```index\.d\.ts((.|\n)*?)```/

const getDeclarationAndMarkup = (markup: string) => {
  const match = markup.match(PATTERN)

  if (!match) {
    return {
      declaration: '',
      markup,
    }
  }

  const declaration = match[1].trim()
  const newMarkup = markup.replace(PATTERN, '').trim()

  return {
    declaration,
    markup: newMarkup,
  }
}

export default getDeclarationAndMarkup
