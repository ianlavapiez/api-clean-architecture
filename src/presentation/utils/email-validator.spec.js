const validator = require('validator')

const EmailValidator = require('./email-validator')

const makeSystemUnit = () => {
  return new EmailValidator()
}

describe('Email Validator', () => {
  test('should return true if validator returns true', () => {
    const systemUnitTest = makeSystemUnit()
    const isEmailValid = systemUnitTest.isValid('valid_email@gmail.com')

    expect(isEmailValid).toBe(true)
  })

  test('should return false if validator returns false', () => {
    validator.isEmailValid = false

    const systemUnitTest = makeSystemUnit()
    const isEmailValid = systemUnitTest.isValid('invalid_email')

    expect(isEmailValid).toBe(false)
  })

  test('should call validator with correct email', () => {
    const systemUnitTest = makeSystemUnit()
    systemUnitTest.isValid('any_email@email.com')

    expect(validator.email).toBe('any_email@email.com')
  })
})
