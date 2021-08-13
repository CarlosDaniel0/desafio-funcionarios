/**
 * Converte o valor para o padrão monetário brasileiro
 * Ex: 1552.95 => 1552,95
 * @param {float} value
 * @returns {string} res
 */
const currencyFromBR = value => {
  const newValue = `${value}`.split('.')
  let res = ''
  if (newValue.length == 2) res = `${newValue[0]},${newValue[1]}`
  else res = `${newValue[0]},00`

  return res
}

export { currencyFromBR }
