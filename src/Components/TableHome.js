import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from "react-router-dom";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

const { SearchBar, ClearSearchButton } = Search;

const columns = [
  {
    dataField: "id",
    text: "ID pegawai",
    sort: true,
  },
  {
    dataField: "nama",
    text: "Nama",
    sort: true,
  },
  {
    dataField: "umur",
    text: "Umur",
    sort: true,
  },
  {
    dataField: "kota",
    text: "Asal Kota",
    sort: true,
  },
  {
    dataField: "link",
    text: "Link",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="danger">Lihat Detail</Button>
          </Link>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const TableHome = (props) => {
  return (
    <div>
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={props.users}
        columns={columns}
        defaultSorted={defaultSorted}
        search
      >
        {(props) => (
          <div>
            <SearchBar {...props.searchProps} />
            <ClearSearchButton variant="danger" {...props.searchProps} />
            <hr />
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
            />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
};

export default TableHome;
