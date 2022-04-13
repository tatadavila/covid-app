// @vendors
import { Form } from "react-bootstrap";

// @interfaces
import { ISelect } from "../../../interfaces/select.interface";

export const Select: React.VFC<ISelect> = ({ countryList, setSelected }) => {
  const handleOnChange = (e: any) => {
    setSelected(e.value);
  };

  return (
    <Form.Select
      aria-label="Select country"
      onChange={(e) => handleOnChange(e.target)}
    >
      {countryList.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </Form.Select>
  );
};
