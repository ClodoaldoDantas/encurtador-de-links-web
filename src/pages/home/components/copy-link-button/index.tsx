import { CheckIcon, CopyIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { toast } from 'sonner'
import { IconButton } from '../../../../components/ui/icon-button'

export function CopyLinkButton({ url }: { url: string }) {
	const [isCopied, setIsCopied] = useState(false)

	const handleCopyLink = async () => {
		try {
			await navigator.clipboard.writeText(url)

			setIsCopied(true)
			setTimeout(() => setIsCopied(false), 2000)
		} catch (err) {
			console.error(err)
			toast.error('Falha ao copiar o link.')
		}
	}

	return (
		<IconButton aria-label="Copiar link encurtado" onClick={handleCopyLink}>
			{isCopied ? (
				<CheckIcon size={18} color="#008236" />
			) : (
				<CopyIcon size={18} />
			)}
		</IconButton>
	)
}
