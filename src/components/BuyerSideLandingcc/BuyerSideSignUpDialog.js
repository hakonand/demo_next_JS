// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import {
  Box,
  Grid,
  Card,
  Container,
  Typography,
  useMediaQuery,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

//

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function BuyerSideSignUpDialog({ openDialog, setOpenDialog }) {
  const theme = useTheme();

  return (
    <>
      <Dialog open={openDialog} onClose={() => setOpenDialog(!openDialog)}>
        <DialogTitle>Registrer User</DialogTitle>{' '}
        <Grid container spacing={2} sx={{ padding: theme.spacing(2), justifyContent: 'center', alignItems: 'center' }}>
          <Grid item xs={12}>
            <Button fullWidth variant="outlined" sx={{ marginTop: theme.spacing(3) }} startIcon={<GoogleIcon />}>
              Google
            </Button>
            <Button fullWidth variant="outlined" sx={{ marginTop: theme.spacing(3) }} startIcon={<FacebookIcon />}>
              Facebook
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ mt: theme.spacing(1) }}>
            <TextField label="Name" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: theme.spacing(1) }}>
            <TextField label="Email" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: theme.spacing(1) }}>
            <TextField label="Password" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: theme.spacing(1) }}>
            <Grid item xs={12}>
              <Button size="large" color="primary" variant="contained">
                Register user
              </Button>
            </Grid>
            <Button color="error" sx={{ mt: 5 }} variant="outlined" onClick={() => setOpenDialog(!openDialog)}>
              Close
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
