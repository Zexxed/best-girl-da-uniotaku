export default req => {
  if (req.method === 'OPTIONS') {
    return ''
  }

  if (req.method === 'POST') {
    return {
      result: 'vote-accepted'
    }
  }

  return {
    status: {
      mode: 'preliminary',
      user: 'Logged-in username'
    },
    entries: [
      {
        id: 1,
        name: 'Garota 1',
        anime: 'Anime da Garota 1',
        image: 'https://fakeimg.pl/256/'
      },
      {
        id: 2,
        name: 'Garota 2',
        anime: 'Anime da Garota 2',
        image: 'https://fakeimg.pl/256/'
      }
    ]
  }
}
