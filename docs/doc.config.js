module.exports ={
  info: {
    title: 'Xmmp',
    desc: '讯盟小程序组件库(Vue3)',
    logo: 'http://file.iming.work/32e0f78e1da19b305b8c.png'
  },
  tconModules: ['layout', 'color', 'size', 'text', 'reset'],
  catelogs: [
    {
      title: '开发指南',
      items: [
        {
          path: 'home',
          title: '介绍',
          md: true
        },
        {
          path: 'quickstart',
          title: '快速上手',
          md: true
        }
      ]
    },
    {
      title: '基础组件',
      items: [
        {
          path: 'color-block',
          title: 'ColorBlock 色块'
        },
        {
          path: 'table',
          title: 'Table 表格'
        }
      ]
    },
    {
      title: 'Vant 组件',
      items: [
        {
          path: 'van-button',
          title: 'Button 按钮',
          vant: true
        },
        {
          path: 'van-tab',
          title: 'Tab 导航',
          vant: true
        }
      ]
    },
    {
      title: '小程序业务',
      items: [
        {
          path: 'card',
          title: 'Card 卡片面板'
        }
      ]
    }
  ]
}
