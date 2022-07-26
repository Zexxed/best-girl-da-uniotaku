export default () => {
  const err = new Error('Invalid login')
  err.statusCode = 403
  throw err
}
