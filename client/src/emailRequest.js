
import axios from 'axios';

export function sendEmail(name, cause) {
  axios.post('http://127.0.0.1:8000/emails/sent/', {cause, name})
    .then(res => res.data)
    .catch(error => {
      console.error(error)
    });
}
