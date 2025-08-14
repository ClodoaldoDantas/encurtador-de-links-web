import {
	CircleNotchIcon,
	LinkIcon,
	WarningOctagonIcon,
} from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { Card } from '../../../../components/ui/card'
import { http } from '../../../../lib/http'
import type { Link } from '../../../../types/link'
import { ShortLinkItem } from '../short-link-item'
import styles from './styles.module.scss'

export function ShortLinksList() {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['short-links'],
		queryFn: async () => {
			const response = await http.get<{ links: Link[] }>('/links')
			return response.data
		},
	})

	return (
		<Card>
			<h2 className={styles.title}>Meus Links</h2>

			{isLoading ? (
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
					{data?.links.length === 0 && (
						<div className={styles.emptyState}>
							<LinkIcon size={32} />
							<p>Ainda não existem links cadastrados</p>
						</div>
					)}

					<ul className={styles.list}>
						{data?.links.map((link) => (
							<ShortLinkItem key={link.id} link={link} />
						))}
					</ul>
				</>
			)}
		</Card>
	)
}
