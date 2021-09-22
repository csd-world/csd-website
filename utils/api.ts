import { UserModel } from "~/type"
const BASE_URL = 'https://rioa.yuuza.net'

const obj2Params = (obj: Object) => Object.entries(obj).map(([key, val]) => `${key}=${val}`).join('&')

function postData<T>(url: string, data: T) {
  console.log('run there');
  
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
  .then(response => {
    if (response.status !== 200) {
      throw new Error('内部错误，请联系管理员。')
    } 
    else return response.json()
  })
}

export function addUser(data: UserModel, grade: 1 | 2) {
  return [
    () => postData<UserModel>('/adduser', data), 
    () => postData<UserModel>('/adduser/g2', data)
  ][grade - 1]()
}