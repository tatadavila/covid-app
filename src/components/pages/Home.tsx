// @vendors
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Table } from "react-bootstrap";
import axios from "axios";

// @components
import { Select } from "../UI/Select/index";

// @data
import { countries } from "../lib/countries";

// @styles
import { boldText } from "../../styles/ts/Text";

// @interfaces
import { IDataSelected } from "../../interfaces/home.interface";

export const Home: React.VFC<{}> = () => {
  const [countryList] = useState(countries);

  const [selected, setSelected] = useState("");
  const [dataSelected, setDataSelected] = useState<IDataSelected | undefined>(
    undefined,
  );

  useEffect(() => {
    if (selected !== "") {
      // Anonymous Function
      (async function () {
        try {
          const { data } = await axios.get(
            `https://covid-api.mmediagroup.fr/v1/cases?country=${selected}`,
          );
          setDataSelected(data.All);
        } catch (error) {
          console.log("Error in API fetch: ", error);
        }
      })();
    }
  }, [selected]);
  console.log(dataSelected);

  return (
    <ThemeProvider breakpoints={["xl", "lg", "md", "sm"]}>
      <Container className="d-flex flex-column d-flex ">
        <div className="p-1 mb-3">
          <Select countryList={countryList} setSelected={setSelected} />
        </div>
        {dataSelected && (
          <div className="d-flex justify-content-center">
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td style={boldText}>Continent</td>
                  <td>{dataSelected.continent}</td>
                </tr>
                <tr>
                  <td style={boldText}>Population</td>
                  <td>{dataSelected.population}</td>
                </tr>
                <tr>
                  <td style={boldText}>Country Area</td>
                  <td>{dataSelected.sq_km_area}</td>
                </tr>
                <tr>
                  <td style={boldText}>Life Expentation </td>
                  <td>{dataSelected.life_expectancy}</td>
                </tr>
                <tr>
                  <td style={boldText}>Confirmed Cases</td>
                  <td>{dataSelected.confirmed}</td>
                </tr>
                <tr>
                  <td style={boldText}>Amount of Deaths</td>
                  <td>{dataSelected.deaths}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </ThemeProvider>
  );
};
