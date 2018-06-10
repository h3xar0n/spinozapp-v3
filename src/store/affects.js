export const affects = {
  '/affects': {
    name: 'Affect',
    solutions: [1, 2, 3],
    dependencies: [],
    insofar: 'an Affect, it can be refined'
  },
  '/affects/action': {
    name: 'Action',
    solutions: [4, 5],
    dependencies: ['/affects'],
    insofar: 'an Action, it can be strengthened'
  },
  '/affects/passion': {
    name: 'Passion',
    solutions: [],
    dependencies: ['/affects'],
    insofar: 'a Passion, it can be weakened or refined'
  },
  '/affects/sorrow': {
    name: 'Sorrow',
    solutions: [],
    dependencies: ['/affects/passion', '/affects'],
    insofar: 'a Sorrow, it can be weakened'
  },
  '/affects/joy': {
    name: 'Joy',
    solutions: [],
    dependencies: ['/affects/passion', '/affects/action', '/affects'],
    insofar: 'a Sorrow, it can be weakened'
  }
  // 'route name as key': {
  //   name: '',
  //   solutions: [],
  //   dependencies: ['/affects'],
  //   insofar: ''
  // }
}
