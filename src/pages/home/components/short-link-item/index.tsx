import { CopyIcon, TrashIcon } from '@phosphor-icons/react'
import { IconButton } from '../../../../components/ui/icon-button'
import styles from './styles.module.scss'

type ShortLinkItemProps = {
	link: {
		id: number
		short_url: string
		original_url: string
	}
}

export function ShortLinkItem({ link }: ShortLinkItemProps) {
	return (
		<li key={link.id} className={styles.listItem}>
			<div className={styles.listItemInfo}>
				<a href={link.short_url} rel="noopener noreferrer">
					{link.short_url}
				</a>

				<span>{link.original_url}</span>
			</div>

			<div className={styles.listItemActions}>
				<IconButton aria-label="Copiar link encurtado">
					<CopyIcon size={18} />
				</IconButton>

				<IconButton aria-label="Excluir link encurtado">
					<TrashIcon size={18} />
				</IconButton>
			</div>
		</li>
	)
}
