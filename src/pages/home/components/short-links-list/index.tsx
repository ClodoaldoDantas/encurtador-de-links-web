import { CopyIcon, TrashIcon } from '@phosphor-icons/react'
import { Card } from '../../../../components/ui/card'
import { IconButton } from '../../../../components/ui/icon-button'
import styles from './styles.module.scss'

export function ShortLinksList() {
	const allLinks = [
		{
			id: 1,
			original_url: 'https://www.google.com',
			short_url: 'https://short.url/1',
		},
		{
			id: 2,
			original_url: 'https://www.example.com',
			short_url: 'https://short.url/2',
		},
		{
			id: 3,
			original_url: 'https://www.test.com',
			short_url: 'https://short.url/3',
		},
		{
			id: 4,
			original_url: 'https://www.another-example.com',
			short_url: 'https://short.url/4',
		},
	]

	return (
		<Card>
			<h2 className={styles.title}>Meus Links</h2>

			<ul className={styles.list}>
				{allLinks.map((link) => (
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
				))}
			</ul>
		</Card>
	)
}
