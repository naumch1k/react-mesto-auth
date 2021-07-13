import { BASE_URL } from './constants';

export const register = ({password, email}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({
      password,
      email
    })
  })
  .then((res) => {
    try {
      if (res.ok) {
        return res.json();
      }
    } catch(e) {
      return (e)
    }
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
}

export const authorize = ({password, email}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({
      password,
      email
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(`Server responded with status: ${res.status} ${res.statusText}`)
      }
    })
}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      console.log(`Server responded with status: ${res.status} ${res.statusText}`)
    }
  })
}
