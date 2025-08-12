import styles from './App.module.css'
import logoImage from './assets/logo.svg'

export function App() {
	return (
		<main className={styles.container}>
			<header className={styles.header}>
				<img src={logoImage} alt="Encurtador" />
			</header>
		</main>
	)
}
