import { zodResolver } from '@hookform/resolvers/zod'
import { WarningCircleIcon } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Card } from '../../../../components/ui/card'
import styles from './styles.module.scss'

const formSchema = z.object({
	originalUrl: z.url({
		error: 'URL inválida',
	}),
})

type CreateLinkFormData = z.infer<typeof formSchema>

export function CreateLinkForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateLinkFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			originalUrl: '',
		},
	})

	const handleCreateLink = (data: CreateLinkFormData) => {
		console.log(data)
	}

	return (
		<Card>
			<h2 className={styles.title}>Gerar novo link</h2>

			<form onSubmit={handleSubmit(handleCreateLink)} className={styles.form}>
				<div
					className={styles.formItem}
					data-state={errors.originalUrl ? 'invalid' : 'default'}
				>
					<label className={styles.formLabel} htmlFor="original-link">
						link original
					</label>

					<input
						type="text"
						id="original-link"
						placeholder="https://www.exemplo.com.br"
						className={styles.formInput}
						{...register('originalUrl')}
					/>

					{errors.originalUrl && (
						<div className={styles.formError}>
							<WarningCircleIcon size={20} />
							<span>{errors.originalUrl?.message}</span>
						</div>
					)}
				</div>

				<button className={styles.button} type="submit">
					Salvar link
				</button>
			</form>
		</Card>
	)
}
