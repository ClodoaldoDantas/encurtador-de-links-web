import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../../../../components/ui/button'
import { Card } from '../../../../components/ui/card'
import { Field } from '../../../../components/ui/field'
import styles from './styles.module.scss'

const formSchema = z.object({
	originalUrl: z.url({
		error: 'Digite um link válido',
	}),
})

type CreateLinkFormData = z.infer<typeof formSchema>

export function CreateLinkForm() {
	const methods = useForm<CreateLinkFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			originalUrl: '',
		},
	})

	const { handleSubmit } = methods

	const handleCreateLink = (data: CreateLinkFormData) => {
		console.log(data)
	}

	return (
		<Card>
			<h2 className={styles.title}>Gerar novo link</h2>

			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(handleCreateLink)} className={styles.form}>
					<Field.Root>
						<Field.Label>Link Original</Field.Label>
						<Field.Control
							type="text"
							name="originalUrl"
							placeholder="https://www.exemplo.com.br"
						/>
					</Field.Root>

					<Button type="submit">Salvar link</Button>
				</form>
			</FormProvider>
		</Card>
	)
}
