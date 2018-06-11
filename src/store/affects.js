export const affects = {
  '/affects': {
    name: 'Affect',
    solutions: [1, 2, 3],
    dependencies: [],
    insofar: 'Affect, it can be refined'
  },
  '/affects/action': {
    name: 'Action',
    solutions: [4, 5],
    dependencies: ['/affects'],
    insofar: 'Action, it can be strengthened'
  },
  '/affects/courage': {
    name: 'Courage',
    solutions: [],
    dependencies: ['/affects/action', '/affects'],
    insofar: 'Courage, it can be strengethened with the following'
  },
  '/affects/nobility': {
    name: 'Nobility',
    solutions: [],
    dependencies: ['/affects/action', '/affects'],
    insofar: 'Nobility, it can be strengethened with the following'
  },
  '/affects/selfacceptance': {
    name: 'Self-Acceptance',
    solutions: [],
    dependencies: ['/affects/action', '/affects'],
    insofar: 'Self-Acceptance, it can be strengethened with the following'
  },
  '/affects/passion': {
    name: 'Passion',
    solutions: [],
    dependencies: ['/affects'],
    insofar: 'Passion, it can be weakened or refined'
  },
  '/affects/sorrow': {
    name: 'Sorrow',
    solutions: [],
    dependencies: ['/affects/passion', '/affects'],
    insofar: 'Sorrow, it can be weakened'
  },
  '/affects/joy': {
    name: 'Joy',
    solutions: [],
    dependencies: ['/affects/passion', '/affects/action', '/affects'],
    insofar: 'Joy, it can be strengthened or refined'
  },
  '/affects/desire': {
    name: 'Desire',
    solutions: [],
    dependencies: ['/affects/passion', '/affects/action', '/affects'],
    insofar: 'Desire, it can be strengthened or refined'
  },
  '/affects/hatred': {
    name: 'Hatred',
    solutions: [],
    dependencies: ['/affects/sorrow', '/affects/passion', '/affects'],
    insofar: 'Hatred, it can be weakened'
  },
  '/affects/love': {
    name: 'Love',
    solutions: [],
    dependencies: ['/affects/joy', '/affects/passion', '/affects/action', '/affects'],
    insofar: 'Love, it can be strengthened or refined'
  },
  '/affects/anger': {
    name: 'Anger',
    solutions: [],
    dependencies: ['/affects/hatred', '/affects/sorrow', '/affects/passion', '/affects'],
    insofar: 'Anger, it can be weakened'
  },
  '/affects/gratitude': {
    name: 'Gratitude',
    solutions: [],
    dependencies: ['/affects/love', '/affects/joy', '/affects/passion', '/affects/action', '/affects'],
    insofar: 'Gratitude, it can be strengthened or refined'
  },
  '/affects/sympathy': {
    name: 'Sympathy',
    solutions: [],
    dependencies: ['/affects/sorrow', '/affects/joy', '/affects/desire', '/affects/passion', '/affects'],
    insofar: 'Gratitude, it can be strengthened or refined'
  },
  '/affects/ambition': {
    name: 'Ambition',
    solutions: [],
    dependencies: ['/affects/desire', '/affects/passion', '/affects'],
    insofar: 'Ambition, it can be weakened or refined'
  }
  // 'route name as key': {
  //   name: '',
  //   solutions: [],
  //   dependencies: ['/affects'],
  //   insofar: ''
  // }
}
