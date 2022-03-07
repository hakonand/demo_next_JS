// material
import {
	Typography,
	Grid,
	Stack,
	Box,
	TextField,
	Button,
	DialogContent,
	Divider,
	ButtonGroup,
	DialogActions,
} from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function SoMePostInfo({ step, setStep, handleCloseDialog }) {
	const theme = useTheme()

	return (
		<DialogContent>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField label='Title' fullWidth variant='filled' />
				</Grid>
				<Grid item xs={12}>
					<TextField
						label='Text'
						fullWidth
						variant='filled'
						multiline
						rows={5}
					/>
				</Grid>
			</Grid>
		</DialogContent>
	)
}
