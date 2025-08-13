import {
	CircleNotchIcon,
	LinkIcon,
	WarningOctagonIcon,
} from '@phosphor-icons/react'
import { Card } from '../../../../components/ui/card'
import type { Link } from '../../../../types/link'
import { ShortLinkItem } from '../short-link-item'
import styles from './styles.module.scss'

export function ShortLinksList() {
	const allLinks: Link[] = [] // This should be replaced with actual data fetching logic
	const loading = false // This should be replaced with actual loading state
	const isError = false // This should be replaced with actual error state

	return (
		<Card>
			<h2 className={styles.title}>Meus Links</h2>

			{loading ? (
				<div className={styles.loadingState}>
					<CircleNotchIcon size={32} />
					<p>Carregando...</p>
				</div>
			) : isError ? (
				<div className={styles.errorState}>
					<WarningOctagonIcon size={32} />
					<p>Erro ao carregar links</p>
				</div>
			) : (
				<>
					{allLinks.length === 0 && (
						<div className={styles.emptyState}>
							<LinkIcon size={32} />
							<p>Ainda não existem links cadastrados</p>
						</div>
					)}

					<ul className={styles.list}>
						{allLinks.map((link) => (
							<ShortLinkItem key={link.id} link={link} />
						))}
					</ul>
				</>
			)}
		</Card>
	)
}
