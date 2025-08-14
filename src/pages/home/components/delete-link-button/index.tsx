import { TrashIcon } from '@phosphor-icons/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { IconButton } from '../../../../components/ui/icon-button'
import { http } from '../../../../lib/http'

export function DeleteLinkButton({ linkId }: { linkId: number }) {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: (linkId: number) => {
			return http.delete(`/link/${linkId}`)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['short-links'] })
			toast.success('Link excluído com sucesso!')
		},
		onError: () => {
			toast.error('Erro ao excluir link.')
		},
	})

	const handleDeleteLink = () => {
		mutation.mutate(linkId)
	}

	return (
		<IconButton
			aria-label="Excluir link encurtado"
			onClick={handleDeleteLink}
			disabled={mutation.isPending}
		>
			<TrashIcon size={18} />
		</IconButton>
	)
}
