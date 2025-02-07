import React from "react";

const Arrays = () => {
  const students = [
    { name: "jay", age: 22, marks: 90 },
    { name: "harshil", age: 23, marks: 80 },
    { name: "keval", age: 27, marks: 70 },
  ];
  return (
    <div>
      {students.map((st) => {
        return (
          <div>
            <li>{st.name}</li>
            <li>{st.age}</li>
            <li>{st.marks}</li>
          </div>
        );
      })}
    </div>
  );
};

export default Arrays;
