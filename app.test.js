/** @format */

const {eligible} = require('./src/components/functions')

const userTemplate = {
  id: 0,
  name: 'Lakeisha',
  dob: '00/00/0000',
  status: 'unemployed',
  income: 0,
  number: 0,
  postcode: '00'
}

test('CARD INTRODUCTION', () => {
  expect(eligible(userTemplate)).toEqual({ok: true, data: 200, message: 'Card: Hi there, what can I help you with'})
})
