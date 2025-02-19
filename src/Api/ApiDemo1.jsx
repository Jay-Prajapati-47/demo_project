import axios from "axios";
import React, { useState } from "react";

const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [datas, setDatas] = useState([]);

  const apiHandler = async () => {
    const data = await axios.get("https://node5.onrender.com/user/user");
    console.log(data);
    setmessage(data.data.message);
    setDatas(data.data.data);
  };
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Api Demo1</h1>
      <button onClick={apiHandler}>Get Api</button>
      <br />
      <h2>{message}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {datas.length > 0 ? (
          <table className="table table-dark" style={{ width: "80%" }}>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((d) => {
                return (
                  <tr>
                    <td>{d._id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default ApiDemo1;
