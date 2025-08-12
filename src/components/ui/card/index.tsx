import type { ComponentProps } from 'react'
import styles from './styles.module.scss'

type CardProps = ComponentProps<'div'>

export function Card(props: CardProps) {
	return <div className={styles.card} {...props} />
}
