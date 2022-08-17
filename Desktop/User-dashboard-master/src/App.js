import React, { useState } from "react";
import "./App.css";
import MaterialTable from "material-table";
import {Container} from '@material-ui/core'
import Header from './components/Header'
function App() {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      location: "Kolkata , India",
      status: "A",
      TypeOfCustomer: "Individual",
      TypesOfPackages: "F",
      paymentsdonevia:"P",
      Freetrialperiod: "F",
      LastAmountPay: "20$",
      LastAmpuntPayDate: "21/08/2022",

    },
    {
      id: 2,

      name: "Ervin Howell",
      email: "Ervin Howell@april.biz",
      phone: "1-771-852-8031 x56442",
      location: "Aying , Germany",
      
      status: "A",
      TypeOfCustomer: "Corporate",
      TypesOfPackages: "S",

      paymentsdonevia:"G",
      Freetrialperiod: "A",
      LastAmountPay: "20$",
      LastAmpuntPayDate: "20/08/2022",
    },
    {
      id: 3,

      name: "Clementine Bauch",
      email: "Clementine.Bauch@april.biz",
      phone: "1-770-788-7777 x56442",
      location: "Douglas Extension , USA",
     
      status: "A",
      TypeOfCustomer: "Individual",
      TypesOfPackages: "F",

      paymentsdonevia:"U",
      Freetrialperiod: "A",
      LastAmountPay: "50$",
      LastAmpuntPayDate: "19/08/2022",

    },
    {
      id: 4,

      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      location: "Kulas Light , Spain",
      status: "A",
      TypeOfCustomer: "Corporate",
      TypesOfPackages: "S",
      paymentsdonevia:"P",
      Freetrialperiod: "F",
      LastAmountPay: "25$",
      LastAmpuntPayDate: "20/08/2022",
    },
    {
      id: 5,

      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      phone: "1-444-736-8031 x56472",
      location: "Hoeger Mall , Canada",
      status: "I",
      TypeOfCustomer: "Individual",
      TypesOfPackages: "F",
      paymentsdonevia:"G",
      Freetrialperiod: "F",
      LastAmountPay: "20$",
      LastAmpuntPayDate: "20/08/2022",
    },
    {
      id: 6,

      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      location: "Skiles  , USA",
      status: "I",
      TypeOfCustomer: "Corporate",
      TypesOfPackages: "S",
      paymentsdonevia:"G",
      Freetrialperiod: "A",
      LastAmountPay: "20$",
      LastAmpuntPayDate: "20/08/2022",
    },
    {
      id: 7,

      name: "Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      location: "1-477-935-8478 x6430",
      street: "Norberto Crossing , Germany",
      status: "I",
      TypeOfCustomer: "Individual",
      TypesOfPackages: "F",
      paymentsdonevia:"G",
      Freetrialperiod: "A",
      LastAmountPay: "20$",
      LastAmpuntPayDate: "20/08/2022",
    },
    {
      id: 8,

      name: "Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478 x6430",
      location: "Norberto Crossing , Norway",
      status: "I",
      TypeOfCustomer: "Corporate",
      TypesOfPackages: "S",
      paymentsdonevia:"G",
      Freetrialperiod: "A",
      LastAmountPay: "20$",
      LastAmpuntPayDate: "20/08/2022",
    },
    {
      id: 9,

      name: "Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478 x6430",
      location: "Norberto Crossing , Norway",
      status: "I",
      TypeOfCustomer: "Corporate",
      TypesOfPackages: "S",
      paymentsdonevia:"P",
      Freetrialperiod: "F",
      LastAmountPay: "20$",
      LastAmpuntPayDate: "17/08/2022",
    },
    {
      id: 10,

      name: "Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478 x6430",
      location: "Norberto Crossing , Norway",
      status: "I",
      TypeOfCustomer: "Corporate",
      TypesOfPackages: "S",
      paymentsdonevia:"G",
      Freetrialperiod: "A",
      LastAmountPay: "20$",
      LastAmpuntPayDate: "20/08/2022",
    },
    {
      id: 11,

      name: "Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478 x6430",
      location: "Norberto Crossing , Norway",
      status: "I",
      TypeOfCustomer: "Corporate",
      TypesOfPackages: "S",
      paymentsdonevia:"G",
      Freetrialperiod: "F",
      LastAmountPay: "20$",
      LastAmpuntPayDate: "20/08/2022",
    },
  ]);

  const columns = [
    { title: "ID", field: "id", filtering: false },

    { title: "Name", field: "name", filterPlaceholder: "Filter By Name" },
    { title: "Email", field: "email", filterPlaceholder: "Filter By Email" },
    {
      title: "Phone Number",
      field: "phone",
      filterPlaceholder: "Filter By Phone",
      filtering: false
    },
    {
      title: "Location",
      field: "location",
      filterPlaceholder: "Filter By Location",
      filtering: false,
    },
    {
      title: "Last Amount Pay",
      field: "LastAmountPay",
      filterPlaceholder: "Filter By Last Amount Pay",
      filtering: false,
    },
    {
      title: "Last Amount Pay Date",
      field: "LastAmpuntPayDate",
      filterPlaceholder: "Filter By Last Amount Pay Date",
      filtering: false,
    },
    {
      title: "Type of Customer",
      field: "TypeOfCustomer",
      filterPlaceholder: "Filter By Type of Customer",
      filtering: false,
    },
    {
      title: "Status",
      field: "status",
      lookup: { A: "active", I: "inactive" },
    },
    {
      title: "Types of packages",
      field: "TypesOfPackages",
      lookup: { F: "FDS", S: "Scrum Master" },
    },
    {
      title: "Free trial period",
      field: "Freetrialperiod",
      lookup: { F: "Finish", A: "Active" },
    },
    {
      title: "Payments Done Via",
      field: "paymentsdonevia",
      lookup: { G: "Google Pay", P: "PayPal", U: "UPI" },
    },
    {
      title: "Types of packages",
      field: "TypesOfPackages",
      lookup: { F: "FDS", S: "Scrum Master" },
    },
  ];
  return (
    <div className="App">
      <Container>
        <Header/>
    
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <MaterialTable
        columns={columns}
        data={tableData}
        title="User Support System"
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);
              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const deleteData = [...tableData];
              deleteData.splice(selectedRow.tableData.id, 1);
              console.log(deleteData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        options={{
          search: true,
          sorting: true,
          searchAutoFocus: true,
          searchFieldVariant: "outlined",
          filtering: false,
          filterCellStyle: { width: "25%" },
          paging: true,
          pageSizeOptions: [2, 5, 10, 20, 25],
          paginationType: "stepped",
          exportButton: true,
          exportAllData: true,
          exportFileName: "TableData",
          addRowPosition: "first",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: false,
          columnsButton: true,
          rowStyle: { background: "#f5f5f5" },
          headerStyle: { background: "#1f5f9d" , color: "white" },
        }}
      />
      </Container>
     
    </div>
  );
}

export default App;
