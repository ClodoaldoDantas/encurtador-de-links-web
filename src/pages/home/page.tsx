import logoImage from '../../assets/logo.svg'
import { CreateLinkForm } from './components/create-link-form'
import styles from './page.module.scss'

export function HomePage() {
	return (
		<main className={styles.container}>
			<header className={styles.header}>
				<img src={logoImage} alt="Encurtador" />
			</header>

			<div className={styles.grid}>
				<CreateLinkForm />
			</div>
		</main>
	)
}
