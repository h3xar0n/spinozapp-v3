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
    insofar: 'Courage, it can be strengethened'
  },
  '/affects/nobility': {
    name: 'Nobility',
    solutions: [],
    dependencies: ['/affects/action', '/affects'],
    insofar: 'Nobility, it can be strengethened'
  },
  '/affects/selfacceptance': {
    name: 'Self-Acceptance',
    solutions: [],
    dependencies: ['/affects/action', '/affects'],
    insofar: 'Self-Acceptance, it can be strengethened'
  },
  '/affects/passion': {
    name: 'Passion',
    solutions: [],
    dependencies: ['/affects'],
    insofar: 'Passion, it can be weakened or refined'
  },
  '/affects/joy': {
    name: 'Joy',
    solutions: [],
    dependencies: ['/affects/passion', '/affects/action', '/affects'],
    insofar: 'Joy, it can be refined'
  },
  '/affects/sympathy': {
    name: 'Sympathy',
    solutions: [],
    dependencies: ['/affects/sorrow', '/affects/joy', '/affects/desire', '/affects/passion', '/affects'],
    insofar: 'Gratitude, it can be refined'
  },
  '/affects/love': {
    name: 'Love',
    solutions: [],
    dependencies: ['/affects/joy', '/affects/passion', '/affects/action', '/affects'],
    insofar: 'Love, it can be refined'
  },
  '/affects/vainglory': {
    name: 'Vainglory',
    solutions: [],
    dependencies: ['/affects/joy', '/affects/passion', '/affects'],
    insofar: 'Vainglory, it can be refined'
  },
  '/affects/pride': {
    name: 'Pride',
    solutions: [],
    dependencies: ['/affects/joy', '/affects/passion', '/affects'],
    insofar: 'Pride, it can be refined'
  },
  '/affects/sorrow': {
    name: 'Sorrow',
    solutions: [],
    dependencies: ['/affects/passion', '/affects'],
    insofar: 'Sorrow, it can be weakened'
  },
  '/affects/hatred': {
    name: 'Hatred',
    solutions: [],
    dependencies: ['/affects/sorrow', '/affects/passion', '/affects'],
    insofar: 'Hatred, it can be weakened'
  },
  '/affects/shame': {
    name: 'Shame',
    solutions: [],
    dependencies: ['/affects/sorrow', '/affects/passion', '/affects'],
    insofar: 'Shame, it can be weakened'
  },
  '/affects/humility': {
    name: 'Humility',
    solutions: [],
    dependencies: ['/affects/sorrow', '/affects/passion', '/affects'],
    insofar: 'Humility, it can be weakened'
  },
  '/affects/desire': {
    name: 'Desire',
    solutions: [],
    dependencies: ['/affects/passion', '/affects/action', '/affects'],
    insofar: 'Desire, it can be refined'
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
