import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import  {getCurrentDate} from '../utils/formatDate.js'
  //first enter record
  let firstEnterData = {
    clientUuid : uuidv4(),
    date : getCurrentDate(),
    path : window.location.pathname
}

export {firstEnterData}