import React from 'react'
// scroll bar
import 'simplebar/src/simplebar.css'
// editor
import 'react-quill/dist/quill.snow.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import 'react-image-lightbox/style.css'

// next
import Head from 'next/head'
import { CacheProvider } from '@emotion/react'
// material
import { NoSsr } from '@mui/material'
// contexts
import { SettingsProvider } from 'src/contexts/SettingsContext'
import { CollapseDrawerProvider } from 'src/contexts/CollapseDrawerContext'
import { AuthProvider } from 'src/contexts/AuthContext'

// theme
import ThemeConfig from 'src/theme'
import GlobalStyles from 'src/theme/globalStyles'
// utils
import createEmotionCache from 'src/utils/createEmotionCache'

// components
import Settings from 'src/components/settings'
import RtlLayout from 'src/components/RtlLayout'
import ProgressBar from 'src/components/ProgressBar'
import LoadingScreen from 'src/components/LoadingScreen'
import ThemePrimaryColor from 'src/components/ThemePrimaryColor'

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<AuthProvider>
			<SettingsProvider>
				<CollapseDrawerProvider>
					<CacheProvider value={emotionCache}>
						<Head>
							<meta
								name='viewport'
								content='initial-scale=1, width=device-width'
							/>
						</Head>

						<ThemeConfig>
							<ThemePrimaryColor>
								<RtlLayout>
									<GlobalStyles />
									<ProgressBar />
									<Component {...pageProps} />
								</RtlLayout>
							</ThemePrimaryColor>
						</ThemeConfig>
					</CacheProvider>
				</CollapseDrawerProvider>
			</SettingsProvider>
		</AuthProvider>
	)
}
