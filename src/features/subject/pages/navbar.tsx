import { Close, DarkMode, Help, LightMode, Menu, Message, Notifications, Search } from '@mui/icons-material';
import {
  Box,
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';

import { setMode } from '../../../store/auth/authSlice';
import FlexBetween from '../components/flex-between';

const Navbar = () => {
  const { palette } = useTheme();
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.user);
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  const fullName = `123`;

  return (
    <FlexBetween padding="1rem 6%" color={palette.grey[300]}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          sx={{
            '&:hover': {
              color: palette.primary.light,
              cursor: 'pointer'
            }
          }}
        >
          123
        </Typography>
      </FlexBetween>

      {/* DESKTOP NAV */}

      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <FlexBetween color={palette.grey[300]} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>

          <IconButton onClick={() => dispatch(setMode())}>
            {palette.mode === 'dark' ? (
              <DarkMode sx={{ fontSize: '25px' }} />
            ) : (
              <LightMode sx={{ color: palette.primary.dark, fontSize: '25px' }} />
            )}
          </IconButton>
          <Message sx={{ fontSize: '25px' }} />
          <Notifications sx={{ fontSize: '25px' }} />
          <Help sx={{ fontSize: '25px' }} />
        </FlexBetween>
      ) : (
        <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
          <Menu />
        </IconButton>
      )}
      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          sx={{ background: palette.background.default }}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="3rem">
            <IconButton onClick={() => dispatch(setMode())} sx={{ fontSize: '25px' }}>
              {palette.mode === 'dark' ? (
                <DarkMode sx={{ fontSize: '25px' }} />
              ) : (
                <LightMode sx={{ color: palette.primary.dark, fontSize: '25px' }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: '25px' }} />
            <Notifications sx={{ fontSize: '25px' }} />
            <Help sx={{ fontSize: '25px' }} />
            <FormControl>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: palette.primary.light,
                  width: '150px',
                  borderRadius: '0.25rem',
                  p: '0.25rem 1rem',
                  '& .MuiSvgIcon-root': {
                    pr: '0.25rem',
                    width: '3rem'
                  },
                  '& .MuiSelect-select:focus': {
                    backgroundColor: palette.primary.light
                  }
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
