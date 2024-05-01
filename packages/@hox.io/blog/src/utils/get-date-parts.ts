const getDateParts = (partialDate: string) => {
  const date = new Date(`${partialDate}T12:00:00`)
  const year = date.getFullYear()
  const month = date.toLocaleString('default', { month: 'long' })
  const day = date.toLocaleString('default', { day: 'numeric' })

  return { year, month, day }
}

export default getDateParts
