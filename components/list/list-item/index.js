Component({
    props: {
        className: '',
        disabled: false,
        multipleLine: false
    },
    methods: {
        onItemTap: function onItemTap(ev) {
            var _props = this.props,
                onClick = _props.onClick,
                disabled = _props.disabled;

            if (onClick && !disabled) {
                onClick({
                    index: ev.target.dataset.index
                });
            }
        }
    }
});