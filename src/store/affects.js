export const affects = {
  '/affects': {
    name: 'Affect',
    solutions: [1, 2, 3],
    dependencies: {},
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
  }
  // 'route name as key': {
  //   name: '',
  //   solutions: [],
  //   dependencies: ['/affects'],
  //   insofar: ''
  // }
}
