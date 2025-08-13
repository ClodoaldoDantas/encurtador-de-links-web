import type { ComponentProps } from 'react'
import styles from './styles.module.scss'

export function IconButton(props: ComponentProps<'button'>) {
	return <button type="button" className={styles.iconButton} {...props} />
}
