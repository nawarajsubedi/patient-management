import { UPLOAD_CSV_FILE_URL } from "../../common/url";
import { getAuth } from "../../store/utils";

export interface CSVDataValidationResponse {
  id: string;
  fieldName: string;
  dataValue: string;
  errorRemark: string;
}

export interface GroupedValidations {
  id: string;
  items: CSVDataValidationResponse[];
}

export const groupData = (
  data: CSVDataValidationResponse[]
): GroupedValidations[] => {
  const groupedData: GroupedValidations[] = [];

  data.forEach((item) => {
    const existingGroup = groupedData.find((group) => group.id === item.id);
    if (existingGroup) {
      existingGroup.items.push(item);
    } else {
      groupedData.push({
        id: item.id,
        items: [item],
      });
    }
  });

  return groupedData;
};

export const uploadCsv = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const { token } = getAuth();
  const response = await fetch(UPLOAD_CSV_FILE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  return response;
};
