import React from "react";
import { Button, Typography } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CustomMaterialTable from "../CustomMaterialTable";
import axios from "axios";
import { GET_COVID_SUMMARY } from "../../constants";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const columns = [
  { title: "Country", field: "Country" },
  { title: "CountryCode", field: "CountryCode" },
  { title: "Newly Confirmed", field: "NewConfirmed", type: "numeric" },
  {
    title: "Date",
    field: "Date",
  },
  { title: "New Deaths", field: "NewDeaths", type: "numeric" },
  { title: "New Recovered", field: "NewRecovered", type: "numeric" },
  { title: "Slug", field: "Slug", type: "numeric" },
  { title: "Total Confirmed", field: "TotalConfirmed", type: "numeric" },
  { title: "Total Deaths", field: "TotalDeaths", type: "numeric" },
  { title: "Total Recovered", field: "TotalRecovered", type: "numeric" },
];

function GraphsBase({ isDarkModeOn, switchThemeMode }) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useLayoutEffect(() => {
    setLoading(true);
    axios.get(GET_COVID_SUMMARY).then((response) => {
      response &&
        response.data &&
        response.data.Countries &&
        setData(response.data.Countries);
      setLoading(false);
    });
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <CustomMaterialTable
        title="Covid Cases / Deaths"
        columns={columns}
        data={data}
        isLoading={loading}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphsBase);
