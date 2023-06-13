import { Button, SvgIcon } from "@mui/material";
import { ChangeEvent, useRef } from "react";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { UPLOAD_CSV_FILE_URL } from "../../common/url";

const CSVUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // 👇️ open file input box on click of another element
    if (inputRef.current) {
      // 👇️ open file input box on click of another element
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }

    event.target.value = "";

    const formData = new FormData();
    formData.append("file", file);

    fetch(UPLOAD_CSV_FILE_URL, {
      method: "POST",
      body: formData, // This is a file object
    })
      .then(
        (response) => response.json() // if the response is a JSON object
      )
      .then(
        (success) => console.log(success) // Handle the success response object
      )
      .catch(
        (error) => console.log(error) // Handle the error response object
      );
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
    </div>
  );
};

export default CSVUpload;
