export default [{
  path: '/',
  redirect: '/docs'
}, {
  path: '/docs',
  component: r => require.ensure([], () => r(require('../components/ui/index.vue')), 'docs'),
  children: [{
    name: 'docs',
    path: '',
    redirect: '/docs/index'
  }, {
    name: 'index',
    path: 'index',
    component: r => require.ensure([], () => r(require('../components/ui/index/index.vue')), 'docs.index'),
    meta: { KeepAlive: true, category: { name: 'docs' } }
  }, {
    name: 'animation',
    path: 'animation',
    component: r => require.ensure([], () => r(require('../components/ui/animation/index.vue')), 'docs.animation'),
    meta: { KeepAlive: true, category: { name: 'docs' } }
  }, {
    name: 'sprint',
    path: 'sprint',
    component: r => require.ensure([], () => r(require('../components/ui/sprint/index.vue')), 'docs.sprint'),
    meta: { KeepAlive: true, category: { name: 'docs' } }
  }]
}]