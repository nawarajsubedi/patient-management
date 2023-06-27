import { ChangeEvent, useRef, useState } from "react";
import {
  Button,
  DialogActions,
  DialogContent,
  SvgIcon,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  SnackbarCloseReason,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  DialogModal,
  DialogModalTitle,
} from "../../component/common/dialog/BootstrapDialog";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import AlertComponent from "../../component/common/alert/AlertComponent";
import {
  CSVDataValidationResponse,
  GroupedValidations,
  groupData,
  uploadCsv,
} from "./CSVFileUploadService";

const listStyle = {
  background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
  borderRadius: "10px",
  marginBottom: "10px",
};

const CSVUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [openValidationModal, setOpenValidationModal] = useState(false);
  const openValidationsModal = () => setOpenValidationModal(true);
  const handleClose = () => setOpenValidationModal(false);
  const [message, setMessage] = useState("");

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const [validations, setValidations] = useState<GroupedValidations[]>([]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const handleSnackbarClose = (
    event: React.SyntheticEvent<any, Event> | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  const handleClick = () => {
    // 👇️ open file input box on click of another element
    if (inputRef.current) {
      // 👇️ open file input box on click of another element
      inputRef.current.click();
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }

    event.target.value = "";

    const response = await uploadCsv(file);
    if (response.status === 400) {
      const validations: CSVDataValidationResponse[] = await response.json();
      const groupedData = groupData(validations);
      setValidations(groupedData);
      openValidationsModal();
    }

    if (response.status === 201) {
      setMessage("File Successfully Uploaded!!!");
      setOpenSnackBar(true);
    }
  };

  return (
    <div>
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        accept=".csv"
        onChange={handleFileChange}
      />
      <Button
        onClick={handleClick}
        startIcon={
          <SvgIcon fontSize="small">
            <PlusIcon />
          </SvgIcon>
        }
        variant="contained"
      >
        Add
      </Button>
      <DialogModal
        fullScreen={fullScreen}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openValidationModal}
      >
        <DialogModalTitle id="customized-dialog-title" onClose={handleClose}>
          CSV Data validation
        </DialogModalTitle>
        <DialogContent dividers>
          <div>
            <Typography variant="h5">Invalid Observations</Typography>
            <List>
              {validations.map((item, index) => (
                <div key={item.id}>
                  {index !== 0 && <Divider />}
                  <ListItem sx={listStyle}>
                    <ListItemText primary={`Observation Id: ${item.id}`} />
                  </ListItem>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Data Value</TableCell>
                        <TableCell>Field Name</TableCell>
                        <TableCell>Error Remark</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {item.items.map((subItem) => (
                        <TableRow key={subItem.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{subItem.dataValue}</TableCell>
                          <TableCell>{subItem.fieldName}</TableCell>
                          <TableCell>{subItem.errorRemark}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ))}
            </List>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </DialogModal>

      <AlertComponent
        message={message}
        open={openSnackBar}
        handleClose={handleSnackbarClose}
      />
    </div>
  );
};

export default CSVUpload;
