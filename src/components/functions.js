/** @format */

import {cards} from './card-types'
import {createCard, createCardContainer} from './card-templates'
/**
 *
 * @param {object} user evaluate eligible card types
 */
const eligible = user => {
  const available = []
  if (user.status === 'student') {
    available.push('student')
  }
  if (user.income > 16000) {
    available.push('liquid')
  }
  if (user.postcode !== '') {
    available.push('anywhere')
  }
  return available
}
/**
 *
 * @param {object} userCard create list of available cards
 */
const handleAvailableCards = userCard => {
  let container = createCardContainer()
  userCard.length ? userCard.map(card => container.appendChild(createCard(cards[card]))) : false
  return container
}
/**
 *
 * @param {object} userCard update available cards on dashboard
 */
const handleInformation = userCard => {
  return userCard.length
    ? `Congratulation you are eligible to ${userCard.length} of available cards: ${userCard.join(', ')}`
    : `Commiseration unfortunately you are not eligible for any of available cards we have at the moment please try again later`
}

module.exports = {eligible, handleInformation, handleAvailableCards}
