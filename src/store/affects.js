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
  }
  // 'route name as key': {
  //   name: '',
  //   solutions: [],
  //   dependencies: ['/affects'],
  //   insofar: ''
  // }
}
