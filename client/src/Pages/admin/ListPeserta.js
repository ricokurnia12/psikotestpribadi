import React from "react";
import NavbarAdmin from "../../Components/NavbarAdmin";

import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const muiCache = createCache({
    key: "mui-datatables",
    prepend: true,
});

const columns = ["No", "Nik", "Nama", "Ttl", "Email", "No Handphone"];

const options = {
    search: true,
    download: true,
    print: true,
    viewColumns: true,
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    tableBodyHeight: "40%",
    pagination: false,
    rowHover: true,
    tableBodyMaxHeight: "500px",
    // onTableChange: (action, state) => {
    //   console.log(action);
    //   console.dir(state);
    // },
    selectableRows: "none",
};

const ListPeserta = () => {
    return (
        <div>
            <NavbarAdmin />
            <div className="text-end m-5">
                <button type="button" className="btn btn-danger">
                    Tambah Peserta
                </button>
            </div>
            <CacheProvider value={muiCache}>
                <ThemeProvider theme={createTheme()}>
                    <MUIDataTable
                        data={[]}
                        columns={columns}
                        options={options}
                    />
                </ThemeProvider>
            </CacheProvider>
        </div>
    );
};

export default ListPeserta;
