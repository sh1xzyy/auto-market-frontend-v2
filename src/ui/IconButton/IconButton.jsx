import clsx from 'clsx'

const IconButton = ({
	icon: Icon,
	size = 20,
	onClick,
	className = '',
	iconClassName = '',
	ariaLabel,
	children,
}) => {
	return (
		<button
			className={clsx('group transition-colors duration-300', className)}
			type='button'
			onClick={onClick}
			aria-label={ariaLabel}
		>
			<Icon
				className={clsx(
					'fill-grey-light transition-colors duration-300',
					iconClassName
				)}
				size={size}
			/>
			{children}
		</button>
	)
}

export default IconButton
