import { WarningCircleIcon } from '@phosphor-icons/react'
import classNames from 'classnames'
import type { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import styles from './styles.module.scss'

function FieldRoot({
	children,
	invalid = false,
}: {
	children: React.ReactNode
	invalid?: boolean
}) {
	return (
		<div className={classNames(styles.fieldRoot, { [styles.error]: invalid })}>
			{children}
		</div>
	)
}

function FieldLabel(props: ComponentProps<'label'>) {
	// biome-ignore lint/a11y/noLabelWithoutControl: label component
	return <label className={styles.fieldLabel} {...props} />
}

type FieldControlProps = ComponentProps<'input'> & {
	name: string
}

function FieldControl(props: FieldControlProps) {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	return (
		<>
			<input
				data-state={errors[props.name] ? 'invalid' : 'default'}
				className={styles.fieldInput}
				{...register(props.name)}
				{...props}
			/>

			{errors[props.name] && (
				<div className={styles.fieldMessage}>
					<WarningCircleIcon size={20} />
					<span>{errors[props.name]?.message as string}</span>
				</div>
			)}
		</>
	)
}

export const Field = {
	Root: FieldRoot,
	Label: FieldLabel,
	Control: FieldControl,
}
