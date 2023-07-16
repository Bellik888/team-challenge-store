import NotFoundPage from './pages/NotFoundPage'

const routes = [
	{
		path: '/',
		element: <div>123</div>,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]

export default routes
