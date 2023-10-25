function stringToColor(string) {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}

function stringAvatar(name, customizedColor = null) {
  const firstLetter = name[0]
  let secondLetter = ''

  if (name.split(' ').length > 1) {
    secondLetter = name.split(' ')[1][0]
  } else {
    secondLetter = name[1]
  }

  return {
    sx: {
      width: 40,
      height: 40,
      bgcolor: customizedColor?.slice(0, 7) ?? stringToColor(name),
    },
    children: firstLetter + secondLetter,
  }
}

export default stringAvatar
