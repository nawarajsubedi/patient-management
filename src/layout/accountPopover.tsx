import { useCallback } from "react";
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth, useUser } from "../hooks/useAuth";

export const AccountPopover = (props: {
  anchorEl: any;
  onClose: any;
  open: any;
}) => {
  const { anchorEl, onClose, open } = props;
  const auth = useAuth();
  const user = useUser();
  const navigate = useNavigate();

  const handleSignOut = useCallback(() => {
    onClose?.();
    auth.logout();
    navigate("/login", { replace: true });
  }, [onClose]);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Typography color="text.secondary" variant="body2">
          {user?.name}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: "8px",
          "& > *": {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </MenuList>
    </Popover>
  );
};
