import {createBrowserRouter} from 'react-router-dom'
import { App } from '../App'
import { Home } from '../pages/Home'
import { OrderInformation } from '../pages/OrderInformation';
import { OrderConfirmation } from '../pages/OrderConfirmation';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: '/OrderInfo',
				element: <OrderInformation />,
			},
			{
				path: '/OrderConfirmation',
				element: <OrderConfirmation />,
			},
		],
	},
]);