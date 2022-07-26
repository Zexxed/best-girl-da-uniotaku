import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './routes/Home.vue'
import Login from './routes/Login.vue'
import Preliminaries from './routes/Preliminaries.vue'
import Results from './routes/Results.vue'
import TieBreaker from './routes/TieBreaker.vue'
import Voting from './routes/Voting.vue'
import NotFound from './routes/NotFound.vue'

const routes = [
  { path: '/preliminaries/', component: Preliminaries },
  { path: '/voting/', component: Results },
  { path: '/tie-break/', component: TieBreaker },
  { path: '/results/', component: Voting },
  { path: '/login/', component: Login },
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.BASE_URL),
  routes
})

export default router

export function routeFromApiData (data) {
  // TODO find a way to pass this data to routes

  switch (data.status.mode) {
    case 'preliminary':
      router.push('/preliminaries/')
      break
    case 'voting':
      router.push('/voting/')
      break
    case 'tie-break':
      router.push('/tie-break/')
      break
    case 'finished':
      router.push('/results/')
      break
    default:
      throw Error('Invalid API state')
  }
}
