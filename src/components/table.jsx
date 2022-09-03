import PropTypes from "prop-types";

import "./table.scss";

function Table({ th, td }) {
  return (
    <table>
      <thead>
        <th>Full Name</th>
        <th>Age</th>
        {th(10)}
      </thead>
      <tbody>{td(10)}</tbody>
    </table>
  );
}

Table.propTypes = {
  th: PropTypes.func.isRequired,
  td: PropTypes.func.isRequired,
};

export default Table;
