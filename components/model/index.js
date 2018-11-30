Component({
  mixins: [],
  data: {},
  props: {
    model: {},
    schema: {}
  },
  didMount() {
    
  },
  didUpdate() {
    console.log('change')
   },
  didUnmount() { },
  methods: {
    onInput(event) {
      this.setValue(event)
    },
    onChange(event) {
      this.setValue(event)
    },
    setValue(event) {
      const value = event.detail.value
      const name = event.target.targetDataset.name

      console.log(name, ' = ', value)
    },
    onSubmit(e) {
      console.log(JSON.stringify(e.detail.value))
    }
  }
})
