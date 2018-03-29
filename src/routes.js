import Login from './views/Login.vue'
// import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
// import Page4 from './views/nav2/Page4.vue'
// import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
// import echarts from './views/charts/echarts.vue'

let routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: 'Kafka',
    iconCls: 'el-icon-message', // 图标样式class
    children: [
        { path: '/main', component: Main, name: '总览', hidden: true },
        { path: '/form', component: Form, name: 'Broker Manage' },
        { path: '/table', component: Table, name: 'Topic Manage' },
        { path: '/user', component: user, name: 'Consumer Group' }
    ]
  },
  {
    path: '/',
    component: Home,
    name: 'Zookeeper',
    iconCls: 'fa fa-address-card',
    children: [
        { path: '/page6', component: Page6, name: 'zookeeper查看' },
        { path: '/page6', component: Page6, name: 'ZK Config' }
    ]
  }
]

export default routes
