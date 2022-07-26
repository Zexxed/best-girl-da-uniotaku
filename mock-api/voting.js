export default req => {
  if (req.method === 'OPTIONS') return ''

  if (req.method === 'POST') {
    return {
      result: 'vote-accepted'
    }
  }

  return {
    status: {
      mode: 'voting',
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
      },
      {
        id: 3,
        name: 'Garota 3',
        anime: 'Anime da Garota 3',
        image: 'https://fakeimg.pl/256/'
      },
      {
        id: 4,
        name: 'Garota 4',
        anime: 'Anime da Garota 4',
        image: 'https://fakeimg.pl/256/'
      }
    ],
    brackets: [
      [1, 2],
      [3, 4]
    ]
  }
}
