export const selectorStyles = {
	control: base => ({
		...base,
		borderRadius: 'var(--rounded-md)',
		borderColor: 'var(--color-grey-deep)',
		borderRadius: 'var(--radius-md)',
		fontSize: 'var(--text-md)',
		cursor: 'pointer',
		minHeight: '36px',
		minWidth: '100%',
		backgroundColor: 'var(--color-grey-deep)',
	}),
	option: base => ({
		...base,
		backgroundColor: 'var(--color-grey-deep)',
		color: 'var(--color-white-deep)',
		cursor: 'pointer',
		transition: 'backgroundColor linear 300ms',
		'&:hover': {
			backgroundColor: 'var(--color-black-soft-bg)',
		},
	}),
	singleValue: base => ({
		...base,
		color: 'var(--color-white-muted)',
		fontWeight: 'normal',
	}),
	placeholder: base => ({
		...base,
		color: 'var(--color-white-muted)',
		fontWeight: 'normal',
	}),
}
