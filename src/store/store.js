import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 2,
  selection: 'Affect',
  choices: {
    Affect: {
      latin: 'Affectus',
      video: 'https://www.youtube.com/embed/5bX-H7dYoP0',
      definition: 'By affect I understand affections of the body by which the body\'s power of acting is increased or diminished, aided or restrained, and at the same time, the ideas of these affections.',
      action: null,
      passion: null,
      sorrow: null,
      joy: null,
      desire: null,
      love: null,
      hatred: null,
      variations: {
        sorrow: true,
        joy: true,
        desire: true,
        passion: true,
        action: true
      }
    },
    Sorrow: {
      latin: 'Tristia',
      video: 'https://www.youtube.com/embed/pVEeXjPiw54',
      definition: 'Sorrow is the transition of the mind from a greater to a less perfection.',
      action: null,
      passion: true,
      sorrow: null,
      joy: null,
      desire: null,
      love: null,
      hatred: null,
      variations: ['Humility', 'Hatred']
    },
    Humility: {
      latin: 'Latinus',
      video: 'https://www.youtube.com/embed/pVEeXjPiw54',
      definition: ' ',
      action: null,
      passion: null,
      sorrow: null,
      joy: null,
      desire: null,
      love: null,
      hatred: null,
      variations: []
    },
    Default: {
      latin: 'Latinus',
      video: 'https://www.youtube.com/embed/pVEeXjPiw54',
      definition: ' ',
      action: null,
      passion: null,
      sorrow: null,
      joy: null,
      desire: null,
      love: null,
      hatred: null,
      variations: []
    }
  }
}

export default new Vuex.Store({
  state
})
