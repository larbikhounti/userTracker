import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import  {firstEnterData} from '../mainProcess/init.js'
import  {getCurrentDate} from './formatDate.js'
function generateRecord(event,actionType ) {
    let Record = {};
    Record.clientUuid = firstEnterData.clientUuid
    Record.date = getCurrentDate()
    Record.tagName = event.target.className
    Record.tagType = event.target.nodeName.toLocaleLowerCase()
    Record.actionType = actionType
    Record.AcionUuid = uuidv4()
    Record.text = event.target.textContent.trim()
    return Record
  }

  export {generateRecord}