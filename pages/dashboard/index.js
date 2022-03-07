import { PATH_DASHBOARD } from 'src/routes/paths'

// ----------------------------------------------------------------------

function Page() {
	return null
}

export default Page

export const getServerSideProps = () => {
	return {
		redirect: {
			destination: '/dashboard/Home',
			permanent: false,
		},
	}
}
