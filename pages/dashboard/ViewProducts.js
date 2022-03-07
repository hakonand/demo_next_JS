import React, { useState, useEffect } from 'react'

// material
import { Container } from '@mui/material'

import ViewProductList from 'src/components/dashboard-view-products/ViewProductList'
import Page from 'src/components/Page'

import firebase from 'src/firebase/firebase'
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs'
import { PATH_DASHBOARD } from 'src/routes/paths'
import DashboardLayout from 'src/layouts/dashboard'

const ViewProducts = () => {
	const [isLoading, setIsLoading] = useState(false)

	const [productsArray, setProductsArray] = useState([
		{
			id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba0',
			image:
				'https://firebasestorage.googleapis.com/v0/b/aids-d763c.appspot.com/o/img1.jpg?alt=media&token=e1876b0d-16c4-4071-9df0-91356fd20e0f',
			name: 'testtest',
			price: 123,
			colors: ['purple', 'black', 'midnight blue'],
			inventoryType: 'in_stock',
			status: 'sale',
		},
		{
			id: 'fc681231221bad5-d430-4033-b8f8-4bc069dc0ba0',
			image:
				'https://firebasestorage.googleapis.com/v0/b/aids-d763c.appspot.com/o/img3.jpg?alt=media&token=3753f448-8cf6-40d1-9d74-08243e075da0',
			name: 'Test2',
			price: 1234,
			colors: ['blue', 'red', 'purple', 'yellow', 'black'],
			inventoryType: 'in_stock',
			status: 'sale',
		},
	])
	/* eslint prefer-arrow-callback: 0 */

	useEffect(() => {})

	return (
		<DashboardLayout>
			<Page title='View Products'>
				<Container>
					<HeaderBreadcrumbs
						heading='Your Products'
						links={[
							{ name: 'Dashboard', href: '/dashboard' },
							{ name: 'Products' },
						]}
					/>
					<br />
					<ViewProductList
						products={productsArray}
						isLoading={isLoading}
					/>{' '}
				</Container>
			</Page>
		</DashboardLayout>
	)
}

export default ViewProducts
