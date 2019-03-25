/** @format */

//@ts-check
/**
 *
 * @param {object} data update player stats on player div
 */
export const createCard = data => {
  let card = document.createElement('div')
  card.id = `card${data.id}`
  card.className = `card shadow`
  card.innerHTML = `        
          <h1 class="title"> ${data.name}</h1>
          <p class="detail" >
            Apr : <strong>${data.apr}%</strong><br/>   
            Balance Transfer Offer Duration : <strong>${data.balance} months</strong><br />
            Purchase Offer Duration : <strong>${data.purchase} months</strong><br />
            Credit Available : <strong>£${data.credit}</strong>
          </p>                  
       `
  return card
}

/**
 *
 * creates div parent element
 */
export const createCardContainer = () => {
  let container = document.createElement('div')
  container.className = 'card-wrapper'
  container.id = `card-wrapper`
  return container
}
