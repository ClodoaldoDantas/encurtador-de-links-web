import { CopyLinkButton } from '../copy-link-button'
import { DeleteLinkButton } from '../delete-link-button'
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
				<CopyLinkButton url={link.short_url} />
				<DeleteLinkButton linkId={link.id} />
			</div>
		</li>
	)
}
