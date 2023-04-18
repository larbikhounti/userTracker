// Import the `startListnening` function from './events/eventListners.js'
import {startListnening} from './events/eventListners.js'
import  {setCookies} from './cookies/cookiesHandler.js'
// Define a function `setTrackingUserId` that takes a `userId` parameter
function setTrackingUserId(userId) {
    // Set a cookie with name `trackingUserId` and value `userId`, to be expired never and to be valid for the entire site
    setCookies("trackingUserId",userId)
    // Call the `startListnening` function to start listening for events
    startListnening()
}

// Export the `setTrackingUserId` function
export {setTrackingUserId}