import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../../../../components/ui/button'
import { Card } from '../../../../components/ui/card'
import { Field } from '../../../../components/ui/field'
import { http } from '../../../../lib/http'
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

	const { handleSubmit, reset } = methods

	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: async (data: CreateLinkFormData) => {
			await new Promise((resolve) => setTimeout(resolve, 2000))
			return http.post('/link/create', { original_url: data.originalUrl })
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['short-links'] })
			reset({ originalUrl: '' })
		},
	})

	const handleCreateLink = (data: CreateLinkFormData) => {
		mutation.mutate(data)
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

					<Button type="submit" disabled={mutation.isPending}>
						Salvar link
					</Button>
				</form>
			</FormProvider>
		</Card>
	)
}
