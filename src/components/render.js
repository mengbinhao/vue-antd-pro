export default {
	functional: true,
	props: {
		render: Function
	},
	render: (h, ctx) => {
		//debugger
		return ctx.props.render(h)
	}
}
