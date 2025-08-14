import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { queryClient } from './lib/query-client'
import { HomePage } from './pages/home/page'

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<HomePage />
			<Toaster richColors position="bottom-center" />
		</QueryClientProvider>
	)
}
