import React from "react";
import "./resultsTable.scss";

const ResultsTable = (props) => {
  const { data } = props;
  if (data) {
    return (
      <table className="resultsTable-container">
        <thead className="resultsTable-header">
          <tr>
            <th>{""}</th>
          </tr>
        </thead>
        <tbody className="resultsTable-body">
          {data.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <p className="title">{item.title}</p>
                  <ul>
                    {item.labels.map((label, idx) => {
                      return (
                        <li key={idx}>
                          {
                            <div>
                              <p>
                                <span className="label_keys">id:</span>{" "}
                                {label.id}
                              </p>
                              <p>
                                <span className="label_keys">name:</span>{" "}
                                {label.name}
                              </p>
                              <p>
                                <span className="label_keys">description:</span>{" "}
                                {label.description}
                              </p>
                              <p>
                                <span className="label_keys">color:</span>{" "}
                                {label.color}
                              </p>
                              <p>
                                <span className="label_keys">node_id:</span>{" "}
                                {label.node_id}
                              </p>
                              <p>
                                <span className="label_keys">url:</span>{" "}
                                {label.url}
                              </p>
                            </div>
                          }
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  return <table className="resultsTable-container"></table>;
};

export default ResultsTable;
