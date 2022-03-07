import { Container } from '@mui/material'

import OrderList from 'src/components/OrderList/OrderList'
import Page from 'src/components/Page'
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs'
import DashboardLayout from 'src/layouts/dashboard'

export default function Orderlist() {
	return (
		<DashboardLayout>
			<Page title='Orderlist - markd'>
				<Container>
					<HeaderBreadcrumbs
						heading='Order List'
						links={[
							{ name: 'Dashboard', href: '/dashboard/Home' },
							{ name: 'Order List' },
						]}
					/>

					<OrderList />
				</Container>
			</Page>
		</DashboardLayout>
	)
}

// Warning: validateDOMNesting(...): <br> cannot appear as a child of <tr>. inni her et sted ffs
