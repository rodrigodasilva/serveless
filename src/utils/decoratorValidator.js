const decoratorValidator = (fn, schema) => async function decorator (event) {
  const { error, value } = await schema.validate(event, { abortEarly: false })
  Object.keys(value).map(key => event[key] = value[key])

  if (!error) return fn.apply(this, arguments)

  return {
    body: error.message,
    statusCode: 400
  }
}

module.exports = {
  decoratorValidator
}
