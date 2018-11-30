Page({
  data: {
    model: {
      name: 'Jon',
      gender: 'Man',
      age: 18,
      description: ''
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
              label: '熟练程度(%)',
              modelKey: 'age',
              type: 'slider',
              props: {
                min: 0,
                max: 150,
                step: 1,
                showValue: true
              },
              rules: {
                required: true
              }
            },
            {
              label: '生日',
              modelKey: 'age',
              type: 'date',
              props: {
                min: 0,
                max: 150,
                step: 1
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
