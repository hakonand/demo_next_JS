// material
import { Container, Grid } from '@mui/material'

// components
import Page from 'src/components/Page'

import {
	EcommerceWelcome,
	EcommerceAds,
	EcommerceSoMe,
} from 'src/components/dashboard/index'
import OrderList from 'src/components/orderList/OrderList'

import DashboardLayout from 'src/layouts/dashboard'

// ----------------------------------------------------------------------

export default function MainDashboard() {
	return (
		<DashboardLayout>
			<Page title='Dashboard'>
				<Container maxWidth='xl'>
					<Grid container spacing={3}>
						<Grid item xs={12} md={4}>
							<EcommerceWelcome />
						</Grid>
						<Grid item xs={12} md={4}>
							<EcommerceAds />
						</Grid>
						<Grid item xs={12} md={4}>
							<EcommerceSoMe />
						</Grid>

						<Grid item xs={12} md={12}>
							<OrderList />
						</Grid>
					</Grid>
				</Container>
			</Page>
		</DashboardLayout>
	)
}
