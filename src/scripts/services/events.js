import { baseURL, maxItems } from "../variables.js"

async function getUserEvents(userName) {
    const eventsResponse = await fetch (`${baseURL}/${userName}/events?per_page=${maxItems}`)
    return await eventsResponse.json()  
  }

export {getUserEvents}