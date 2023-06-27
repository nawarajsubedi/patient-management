import React from "react";
import { Snackbar, SnackbarCloseReason } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

type Props = {
  open: boolean;
  message: string;
  handleClose: (
    event: React.SyntheticEvent<any, Event> | Event,
    reason?: SnackbarCloseReason
  ) => void;
};

function AlertComponent({ open, message, handleClose }: Props) {
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
    <MuiAlert elevation={6} variant="filled" ref={ref} {...props} />
  ));

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={60000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AlertComponent;
