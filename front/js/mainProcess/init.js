import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import  {getCurrentDate} from '../utils/formatDate.js'
import  {getCookies} from '../cookies/cookiesHandler.js'
  //first enter record
  let firstEnterData = {
    clientUuid : uuidv4(),
    date : getCurrentDate(),
    path : window.location.pathname,
    userTrackingid : getCookies("trackingUserId")
}



export {firstEnterData}