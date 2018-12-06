Component({
	mixins: [],
	data: {
		formData: {}
	},
	props: {
		model: {},
		schema: {},
		onSubmit() { },
		onReset() { }
	},
	didMount() {
		const data = JSON.parse(JSON.stringify(this.props.model))

		this.setData({
			formData: data
		})
	},
	didUpdate() {
		console.log('change')
	},
	didUnmount() { },
	methods: {
		onInput(event) {
			this.updateValue(event)
		},
		onChange(event) {
			this.updateValue(event)
		},
		updateValue(event) {
			const value = event.detail.value
			const name = event.target.targetDataset.name

			this.setData({ [`formData.${name}`]: value })
			console.log(JSON.stringify(this.data.formData, null, 4))
			console.log(this.props.schema[`formData.${name}`])
		},
		onSubmit(e) {
			console.log(JSON.stringify(e.detail.value))
		},
		onTapCheckbox(e) {
			console.log(e)
		}
	}
})
