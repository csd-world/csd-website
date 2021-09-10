import { UserModel } from "~/type"
const BASE_URL = 'https://rioa.yuuza.net'

const obj2Params = (obj: Object) => Object.entries(obj).map(([key, val]) => `${key}=${val}`).join('&')

function postData<T>(url: string, data: T) {
  return fetch(BASE_URL + url + '?' + obj2Params(data), {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive'
    },
    mode: 'cors',
    redirect: 'follow'
  })
  .then(response => response.json())
}

export function addUser(data: UserModel) {
  return postData<UserModel>('/adduser', data)
}