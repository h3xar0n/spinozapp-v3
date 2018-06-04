export const affects = {
  '/affects': {
    name: 'Affect',
    solutions: [1, 2, 3],
    dependencies: {},
    insofar: 'an affect, it be refined'
  },
  '/affects/action': {
    name: 'Action',
    solutions: [4, 5],
    dependencies: {
      '/affects/': true
    },
    insofar: 'an action, it can be strengthened'
  }
}
