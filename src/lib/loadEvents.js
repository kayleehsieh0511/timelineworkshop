const url = 'http://localhost:8080/api/data/events'

const username = 'kayleehsieh0511';
const password = 'aaaaaabbcc';
const options = {
    headers: {
      Authorization: `Basic ${window.btoa(`${username}:${password}`)}`,
    },
}

export const loadEvents = () => {
  return fetch(url, options)
    .then(res => res.json())
}
