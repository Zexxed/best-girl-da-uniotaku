import { ref } from 'vue'
import { routeFromApiData } from './router.js'

const apiServer = import.meta.env.VITE_API_SERVER
const loginURL = import.meta.env.VITE_LOGIN_URL

export const serverData = ref(null)

function handleLoggedOut () {
  delete window.localStorage.authToken
  if (loginURL) {
    location.href = loginURL
  }
  return 'logged-out'
}

export async function checkLogin () {
  if (!apiServer) return 'no-api'

  // Set window.localStorage.authToken = 'something' to test the API
  const token = window.localStorage.authToken
  if (!token) return handleLoggedOut()

  let response
  try {
    response = await fetch(apiServer + '?token=' + token)
  } catch {
    return 'offline'
  }

  if (!response.ok) return handleLoggedOut()
    
  const data = await response.json()
  serverData.value = data
  routeFromApiData(data)
  return 'logged-in'
}

export async function checkToken (token) {
  if (!apiServer) throw Error('no api server')
  if (!token) throw Error('no token')

  // Check if token is valid before storing it
  const response = await fetch(apiServer + '?token=' + token)

  if (!response.ok) throw Error('Invalid token')
  window.localStorage.authToken = token

  const data = await response.json()
  serverData.value = data
  routeFromApiData(data)
}
