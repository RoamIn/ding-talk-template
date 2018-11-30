Page({
  data: {
    model: {
      name: 'Jon',
      gender: 'Male',
      look: 5,
      nationality: '中国',
      days: ['Mon', 'Sat', 'Fri'],
      email: 'my@email.com',
      description: 'balabala...'
    },
    schema: {
      groups: [
        {
          title: '个人信息',
          fields: [
            {
              label: '姓名',
              modelKey: 'name',
              type: 'input',
              rules: {
                required: true
              },
              messages: {
                required: '姓名不能为空'
              }
            },
            {
              label: '性别',
              modelKey: 'gender',
              type: 'radio-group',
              props: {
                options: ['Male', 'Female']
              },
              rules: {
                required: true
              }
            },
            {
              label: '上课时间',
              modelKey: 'days',
              type: 'checkbox-group',
              props: {
                options: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              rules: {
                required: true
              }
            },
            {
              label: '颜值',
              modelKey: 'look',
              type: 'slider',
              tips: '颜值即正义',
              props: {
                min: 0,
                max: 10,
                step: 1,
                showValue: true
              },
              rules: {
                required: true
              }
            },
            {
              label: '国籍',
              modelKey: 'nationality',
              type: 'picker',
              props: {
                rangeKey: 'name',
                range: [
                  {
                    id: 1,
                    name: '美国'
                  },
                  {
                    id: 2,
                    name: '中国'
                  },
                  {
                    id: 3,
                    name: '巴西'
                  },
                  {
                    id: 4,
                    name: '日本'
                  }
                ]
              },
              rules: {
                required: true
              }
            },
            {
              label: '邮箱',
              modelKey: 'email',
              type: 'input',
              rules: {
                required: true
              }
            },
            {
              label: '简介',
              modelKey: 'description',
              type: 'textarea',
              tips: '讲讲你的兴趣、爱好啥的',
              props: {
                maxlength: 100
              }
            }
          ]
        }
      ]
    }
  },
  onLoad() { }
})
