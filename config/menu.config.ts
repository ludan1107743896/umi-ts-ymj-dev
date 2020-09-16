export default [
  {
    title: '首页',
    link: '/dashboard',
    key: 'dashboard',
    icon: '',
    children: [],
  },
  {
    title: '列表页',
    link: '/list',
    key: 'list',
    icon: '',
    children: [
      {
        title: '查询列表',
        link: '/list/queryTable',
        key: 'queryTable',
        icon: '',
        children: [],
      },
    ],
  },
  {
    title: '自定义页',
    link: '/demo',
    key: 'demo',
    icon: '',
    children: [
      // {
      //   title: 'demo1',
      //   link: '/demo/demo1',
      //   key: 'demo1',
      //   icon:'',
      //   children:[], 
      // },
      {
        title: 'template',
        link: '/demo/template',
        key: 'template',
        icon:'',
      }
    ]
  }
];
