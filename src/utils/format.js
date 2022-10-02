import capitalize from 'lodash/capitalize'
export const tagCase = tag => {
  return tag
    .split('-')
    .map(word => (['&', 'and'].indexOf(word) !== -1 ? word : capitalize(word)))
    .join(' ')
}
