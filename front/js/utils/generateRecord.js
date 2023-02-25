import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import  {firstEnterData} from '../mainProcess/init.js'
import  {getCurrentDate} from './formatDate.js'
function generateRecord(event,actionType ) {
  console.log(getElementPath(event.target))
    let Record = {};
    Record.clientUuid = firstEnterData.clientUuid
    Record.date = getCurrentDate()
    Record.tagName = getElementPath(event.target)
    Record.tagType = event.target.nodeName.toLocaleLowerCase()
    Record.actionType = actionType
    Record.AcionUuid = uuidv4()
    Record.text = event.target.textContent.trim()
    return Record
  }
  function getIdOrClassName(target) {
    if (target.id) {
      return target.id;
    } else {
      const classNames = target.classList;
      return classNames.length > 0 ? classNames[0] : null;
    }
  }
  function getElementPath(element) {
    const path = [];
    let el = element;
  
    while (el) {
      let nodeName = el.nodeName;
      if (el.id) {
        nodeName += `#${el.id}`;
        path.unshift(nodeName);
        break;
      } else {
        let sibling = el;
        let nth = 1;
        while (sibling = sibling.previousElementSibling) {
          if (sibling.nodeName == nodeName) {
            nth++;
          }
        }
        if (nth != 1) {
          nodeName += `:nth-of-type(${nth})`;
        }
      }
      path.unshift(nodeName);
      el = el.parentNode;
    }
    return path.join(" > ");
  }

  export {generateRecord}