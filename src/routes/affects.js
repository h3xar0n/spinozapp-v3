import AffectIndex from '@/components/affects/AffectIndex'
import AffectPage from '@/components/affects/content/Affect'
import Action from '@/components/affects/content/Action'
import Ambition from '@/components/affects/content/Ambition'
import Anger from '@/components/affects/content/Anger'
import Benevolence from '@/components/affects/content/Benevolence'
import Compassion from '@/components/affects/content/Compassion'
import Courage from '@/components/affects/content/Courage'
import Desire from '@/components/affects/content/Desire'
import Gratitude from '@/components/affects/content/Gratitude'
import Hatred from '@/components/affects/content/Hatred'
import Honor from '@/components/affects/content/Honor'
import Humility from '@/components/affects/content/Humility'
import Love from '@/components/affects/content/Love'
import Nobility from '@/components/affects/content/Nobility'
import Pride from '@/components/affects/content/Pride'
import SelfAcquiescence from '@/components/affects/content/SelfAcquiescence'
import Shame from '@/components/affects/content/Shame'
import Passion from '@/components/affects/content/Passion'
import Joy from '@/components/affects/content/Joy'
import Sorrow from '@/components/affects/content/Sorrow'

export const affects = {
  path: '/affects',
  name: 'Affects',
  component: AffectIndex,
  children: [{
    path: '',
    component: AffectPage
  },
  {
    path: 'action',
    component: Action
  },
  {
    path: 'ambition',
    component: Ambition
  },
  {
    path: 'anger',
    component: Anger
  },
  {
    path: 'benevolence',
    component: Benevolence
  },
  {
    path: 'compassion',
    component: Compassion
  },
  {
    path: 'gratitude',
    component: Gratitude
  },
  {
    path: 'hatred',
    component: Hatred
  },
  {
    path: 'honor',
    component: Honor
  },
  {
    path: 'humility',
    component: Humility
  },
  {
    path: 'love',
    component: Love
  },
  {
    path: 'nobility',
    component: Nobility
  },
  {
    path: 'selfacquiescence',
    component: SelfAcquiescence
  },
  {
    path: 'shame',
    component: Shame
  },
  {
    path: 'pride',
    component: Pride
  },
  {
    path: 'gratitude',
    component: Gratitude
  },
  {
    path: 'courage',
    component: Courage
  },
  {
    path: 'passion',
    component: Passion
  },
  {
    path: 'joy',
    component: Joy
  },
  {
    path: 'sorrow',
    component: Sorrow
  },
  {
    path: 'desire',
    component: Desire
  }]
}
