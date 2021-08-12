const currencyFromBR = value => {
  const newValue = `${value}`.split('.')
  let res = ''
  if (newValue.length == 2) res = `${newValue[0]},${newValue[1]}`
  else res = `${newValue[0]},00`

  return res
}

export { currencyFromBR }
