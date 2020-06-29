
import axios from 'axios'

export function sendEmail(name, cause) {
  fetch('http://127.0.0.1:8000/emails/sent/', {
    method: 'POST',
    mode: 'no-cors',
    body: {cause, name}
  })
  .then(res => res.data)
  .catch(error => {
    console.error(error)
  })
}
