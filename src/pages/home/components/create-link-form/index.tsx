import { Card } from '../../../../components/ui/card'
import styles from './styles.module.scss'

export function CreateLinkForm() {
	return (
		<Card>
			<h2 className={styles.title}>Novo link</h2>

			<form className={styles.form}>
				<div className={styles.inputGroup}>
					<label htmlFor="original-link">link original</label>
					<input
						type="text"
						id="original-link"
						placeholder="www.exemplo.com.br"
					/>
				</div>

				<button type="submit">Salvar link</button>
			</form>
		</Card>
	)
}
