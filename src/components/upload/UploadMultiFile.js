import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import fileFill from '@iconify/icons-eva/file-fill'
import closeFill from '@iconify/icons-eva/close-fill'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'

// material

import { styled } from '@mui/material/styles'
import {
	Box,
	List,
	Link,
	Button,
	ListItem,
	ListItemButton,
	Typography,
	ListItemIcon,
	ListItemText,
	ListItemSecondaryAction,
} from '@mui/material'

// utils

import firebase from '../../firebase/firebase'

//

import { MIconButton } from '../@material-extend'
import { varFadeInRight } from '../animate'

// ----------------------------------------------------------------------

const DropZoneStyle = styled('div')(({ theme }) => ({
	outline: 'none',
	display: 'flex',
	textAlign: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	justifyContent: 'center',
	padding: theme.spacing(5, 1),
	borderRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.background.neutral,
	border: `1px dashed ${theme.palette.grey[500_32]}`,
	'&:hover': {
		opacity: 0.72,
		cursor: 'pointer',
	},
	[theme.breakpoints.up('md')]: {
		textAlign: 'left',
		flexDirection: 'row',
	},
}))

// ----------------------------------------------------------------------

UploadMultiFile.propTypes = {
	caption: PropTypes.string,
	error: PropTypes.bool,
	value: PropTypes.array,
	onChange: PropTypes.func,
	sx: PropTypes.object,
}

export default function UploadMultiFile({
	hasFile,
	mainImage,
	setMainImage,
	changeImageField,
	setImageList,
	imageList,
	setHasFile,
	caption,
	error = false,
	value: files,
	onChange: setFiles,
	sx,
	...other
}) {
	const onDropTwo = (acceptedFiles) => {
		if (acceptedFiles.length > 0) {
			const newImages = Array.from(acceptedFiles).map((file) => ({
				file,
				fileName: file.name,
				status: 'CREATED',
				storageRef: firebase.storage().ref().child(file.name),
				downloadURL: '',
				description: '',
			}))

			setImageList((prevState) => [...prevState, ...newImages])
			console.log(imageList)
		}
		console.log(imageList)
	}

	const theme = useTheme()

	const handleRemoveAll = () => {
		//   setImageList([]);

		console.log(files)
		console.log('------------------------')

		console.log(imageList)
	}

	const handleRemoveFile = (file, index) => {
		firebase
			.storage()
			.ref()
			.child(file.fileName)
			.delete()
			.catch((error) => {
				console.log('Error deleting file:', error)
			})

		const newFiles = [...imageList]
		newFiles.splice(newFiles.indexOf(file), 1)
		setImageList(newFiles)
	}

	const selectMainImage = (file) => {
		setMainImage(file.downloadURL)
		console.log(mainImage)
	}

	const { getRootProps, getInputProps, isDragActive, isDragReject } =
		useDropzone({
			maxFiles: 2,
			onDrop: onDropTwo,
		})

	return (
		<Box sx={{ width: '100%', ...sx }} {...other}>
			<DropZoneStyle
				{...getRootProps()}
				sx={{
					...(isDragActive && { opacity: 0.72 }),
					...((isDragReject || error) && {
						color: 'error.main',
						borderColor: 'error.light',
						bgcolor: 'error.lighter',
					}),
				}}
			>
				<input {...getInputProps()} />

				<Box
					component='img'
					alt='select file'
					src='/static/illustrations/illustration_upload.svg'
					sx={{ height: 160 }}
				/>

				<Box
					sx={{
						p: 3,
						ml: { md: 2 },
					}}
				>
					<Typography gutterBottom variant='h5'>
						Drop or Select file
					</Typography>

					{caption ? (
						<Typography variant='body2' sx={{ color: 'text.secondary' }}>
							{caption}
						</Typography>
					) : (
						<Typography variant='body2' sx={{ color: 'text.secondary' }}>
							Drop files here or click&nbsp;
							<Link underline='always'>browse</Link>&nbsp;through your device
						</Typography>
					)}
				</Box>
			</DropZoneStyle>

			<List disablePadding sx={{ my: 2 }}>
				<ListItem
					component={motion.div}
					{...varFadeInRight}
					sx={{
						my: 1,
						py: 0.5,
						height: 100,
						px: 2,
						borderRadius: 1,
						border: (theme) => `solid 1px ${theme.palette.divider}`,
						bgcolor: 'background.paper',
						textAlign: 'center',
					}}
				>
					<ListItemText
						primary='CLICK TO SELECT THE MAIN IMAGE'
						secondary='Select the image below you want to display first'
						primaryTypographyProps={{ variant: 'subtitle1' }}
					/>
				</ListItem>
				<AnimatePresence>
					{imageList.map((file) => (
						<ListItem
							key={file.fileName}
							component={motion.div}
							{...varFadeInRight}
							sx={{
								my: 1,
								py: 0.5,
								px: 2,
								borderRadius: 1,
								border: (theme) => `solid 1px ${theme.palette.divider}`,
								bgcolor:
									mainImage === file.downloadURL
										? theme.palette.success.lighter
										: 'background.paper',
							}}
						>
							<ListItemButton onClick={() => selectMainImage(file)}>
								{file.downloadURL ? (
									<Box sx={{ display: 'block', marginRight: theme.spacing(3) }}>
										<Image
											width='200'
											height='200'
											loading='lazy'
											layout='fixed'
											src={file.downloadURL}
										/>
										<ListItemText
											primary={file.fileName.substring(0, 50)}
											secondary={file.size}
											primaryTypographyProps={{ variant: 'subtitle2' }}
										/>
									</Box>
								) : (
									<ListItemIcon
										sx={{ display: 'block', height: 200, width: 200 }}
									>
										<Icon icon={fileFill} width={32} height={32} />
									</ListItemIcon>
								)}
							</ListItemButton>
							<ListItemSecondaryAction>
								<MIconButton
									edge='end'
									size='large'
									onClick={() => handleRemoveFile(file)}
								>
									<Icon icon={closeFill} />
								</MIconButton>
							</ListItemSecondaryAction>
						</ListItem>
					))}
				</AnimatePresence>
			</List>
		</Box>
	)
}

// {imageList.length > 0 ? (
//   <Box
//     sx={{
//       display: 'flex',
//       justifyContent: 'flex-end',
//       '& > *': { ml: 1.5 }
//     }}
//   >
//     <Button onClick={handleRemoveAll} sx={{ mr: 1.5 }}>
//       Remove all
//     </Button>
//     <Button variant="contained" onClick={consolelog}>
//       Upload files
//     </Button>
//   </Box>
// ) : (
//   <div />
// )}
