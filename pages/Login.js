import { useState, useContext } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'

// material
import {
	Container,
	Typography,
	Grid,
	TextField,
	Button,
	CardActionArea,
	Stack,
	InputLabel,
	InputAdornment,
	MenuItem,
	Card,
	CardHeader,
	CardContent,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

// hooks
import { AuthContext } from 'src/contexts/AuthContext'

// components
import Page from 'src/components/Page'
import MainLayout from 'src/layouts/main'
// ----------------------------------------------------------------------

export default function Login() {
	const theme = useTheme()
	const { user, createUser, loginUser, errorMessage } = useContext(AuthContext)

	function createGradient(color1, color2) {
		return `linear-gradient(to left, ${color1}, ${color2})`
	}

	const [platform, setPlatform] = useState('')

	const [registerNewUser, setRegisterNewUser] = useState(false)

	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const [address, setAddress] = useState('')
	const [zipCode, setZipCode] = useState('')
	const [city, setCity] = useState('')

	const onClickCreateUser = async () => {
		await createUser(email, password, name, address, zipCode, city)
		//signed in & reset inputfield

		setEmail('')
		setPassword('')
		setName('')
		setAddress('')
		setZipCode('')
		setCity('')
	}

	const onClickLogInUser = async () => {
		await loginUser(email, password)

		setEmail('')
		setPassword('')
		console.log(user)
	}

	const [togglePost, setTogglePost] = useState(false)
	return (
		<MainLayout>
			<Page title='Log in'>
				<Container sx={{ pt: theme.spacing(10) }}>
					<Grid
						container
						spacing={3}
						sx={{ mt: theme.spacing(3) }}
						justifyContent='center'
					>
						<Grid item xs={12} md={6}>
							<Card>
								<CardContent>
									<Grid container spacing={2} justifyContent='center'>
										<Grid item xs={12}>
											<Typography variant='subtitle1'>
												{registerNewUser ? 'Register Account' : 'Quick Login'}
											</Typography>{' '}
										</Grid>
										<Grid item xs={4}>
											<div>
												<CardActionArea
													sx={{
														p: theme.spacing(1),
														justifyContent: 'center',
														borderRadius: 1,
														backgroundColor:
															platform === 'Google'
																? theme.palette.primary.lighter
																: theme.palette.common.white,
													}}
													onClick={() => setPlatform('Google')}
												>
													<Stack
														direction='column'
														justifyContent='center'
														alignItems='center'
													>
														<GoogleIcon sx={{ my: theme.spacing(1) }} />
														<Typography variant='subtitle1'>Google</Typography>
													</Stack>
												</CardActionArea>
											</div>
										</Grid>
										<Grid item xs={4}>
											<div>
												<CardActionArea
													sx={{
														p: theme.spacing(1),
														justifyContent: 'center',
														borderRadius: 1,
														backgroundColor:
															platform === 'Facebook'
																? theme.palette.primary.lighter
																: theme.palette.common.white,
													}}
													onClick={() => setPlatform('Facebook')}
												>
													<Stack
														direction='column'
														justifyContent='center'
														alignItems='center'
													>
														<FacebookIcon sx={{ my: theme.spacing(1) }} />
														<Typography variant='subtitle1'>
															Facebook
														</Typography>
													</Stack>
												</CardActionArea>
											</div>
										</Grid>

										<Grid item xs={12}>
											<TextField
												label='Email'
												type='email'
												value={email}
												autoComplete='email'
												fullWidth
												variant='filled'
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
										</Grid>
										{errorMessage ? (
											<Grid item xs={12} ml={1}>
												<Typography variant='body1' color='error'>
													Invalid email
												</Typography>
											</Grid>
										) : (
											<div />
										)}
										<Grid item xs={12}>
											<TextField
												label='Password'
												type='password'
												value={password}
												autoComplete='new-password'
												onChange={(e) => setPassword(e.target.value)}
												fullWidth
												variant='filled'
												helperText={
													registerNewUser
														? 'Password must be longer than 6 characters'
														: ''
												}
												required
											/>
										</Grid>
										{registerNewUser ? (
											<>
												<Grid item xs={12}>
													<TextField
														label='Name'
														type='name'
														autoComplete='name'
														value={name}
														fullWidth
														variant='filled'
														onChange={(e) => setName(e.target.value)}
														required
													/>
												</Grid>

												<Grid item xs={12}>
													<Typography variant='subtitle1'>
														Fulfillment Address (optional)
													</Typography>
												</Grid>
												<Grid item xs={12}>
													<TextField
														label='Address'
														autoComplete='street-address'
														fullWidth
														value={address}
														variant='filled'
														onChange={(e) => setAddress(e.target.value)}
													/>
												</Grid>
												<Grid item xs={6}>
													<TextField
														label='Zip number'
														autoComplete='postal-code'
														fullWidth
														value={zipCode}
														variant='filled'
														onChange={(e) => setZipCode(e.target.value)}
													/>
												</Grid>
												<Grid item xs={6}>
													<TextField
														label='City'
														value={city}
														autoComplete='address-level2'
														fullWidth
														variant='filled'
														onChange={(e) => setCity(e.target.value)}
													/>
												</Grid>
												<Grid item xs={4} sx={{ my: theme.spacing(3) }}>
													<Button
														color='primary'
														fullWidth
														variant='contained'
														size='large'
														disabled={password.length < 6}
														onClick={onClickCreateUser}
													>
														Register User
													</Button>
												</Grid>
											</>
										) : (
											<Grid item xs={4} sx={{ my: theme.spacing(3) }}>
												<Button
													color='primary'
													fullWidth
													variant='contained'
													size='large'
													onClick={onClickLogInUser}
												>
													Log in
												</Button>
											</Grid>
										)}

										<Grid item xs={12}>
											<Button
												size='large'
												onClick={() => setRegisterNewUser(!registerNewUser)}
											>
												{registerNewUser
													? 'Already have an account? Log in'
													: 'No account? Register account here!'}
											</Button>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</Page>
		</MainLayout>
	)
}
