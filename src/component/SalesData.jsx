import React from "react";

const SalesData = () => {
  const sales = [
    {
      id: 1,
      day: "2025-02-01",
      sales: 1500,
      discount: 150,
      profit: 26.67,
    },
    {
      id: 2,
      day: "2025-02-02",
      sales: 1800,
      discount: 180,
      profit: 27.78,
    },
    {
      id: 3,
      day: "2025-02-03",
      sales: 2100,
      discount: 200,
      profit: 28.57,
    },
    {
      id: 4,
      day: "2025-02-04",
      sales: 1900,
      discount: 190,
      profit: 26.32,
    },
    {
      id: 5,
      day: "2025-02-05",
      sales: 2200,
      discount: 220,
      profit: 29.55,
    },
    {
      id: 6,
      day: "2025-02-06",
      sales: 2400,
      discount: 240,
      profit: 30.0,
    },
    {
      id: 7,
      day: "2025-02-07",
      sales: 2500,
      discount: 250,
      profit: 30.0,
    },
    {
      id: 8,
      day: "2025-02-08",
      sales: 2700,
      discount: 270,
      profit: 30.0,
    },
    {
      id: 9,
      day: "2025-02-09",
      sales: 2800,
      discount: 280,
      profit: 30.0,
    },
    {
      id: 10,
      day: "2025-02-10",
      sales: 3000,
      discount: 300,
      profit: 30.0,
    },
    {
      id: 11,
      day: "2025-02-11",
      sales: 3100,
      discount: 310,
      profit: 29.84,
    },
    {
      id: 12,
      day: "2025-02-12",
      sales: 3300,
      discount: 330,
      profit: 30.0,
    },
    {
      id: 13,
      day: "2025-02-13",
      sales: 3400,
      discount: 340,
      profit: 30.0,
    },
    {
      id: 14,
      day: "2025-02-14",
      sales: 3600,
      discount: 360,
      profit: 30.0,
    },
    {
      id: 15,
      day: "2025-02-15",
      sales: 3800,
      discount: 380,
      profit: 30.0,
    },
    {
      id: 16,
      day: "2025-02-16",
      sales: 3900,
      discount: 390,
      profit: 30.0,
    },
    {
      id: 17,
      day: "2025-02-17",
      sales: 4000,
      discount: 400,
      profit: 30.0,
    },
    {
      id: 18,
      day: "2025-02-18",
      sales: 4200,
      discount: 420,
      profit: 30.0,
    },
    {
      id: 19,
      day: "2025-02-19",
      sales: 4400,
      discount: 440,
      profit: 30.0,
    },
    {
      id: 20,
      day: "2025-02-20",
      sales: 4600,
      discount: 460,
      profit: 30.0,
    },
  ];

  return (
    <div>
      <table className="table table-dark" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>DAY</th>
            <th>SALES</th>
            <th>DISCOUNT</th>
            <th>PROFIT</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => {
            return (
              <tr>
                <td
                  style={{ backgroundColor: sale.profit >= 30 ? "green" : "" }}
                >
                  {sale.id}
                </td>
                <td>{sale.day}</td>
                <td>{sale.sales}</td>
                <td>{sale.discount}</td>
                <td style={{ color: sale.profit >= 30 ? "red" : "" }}>
                  {sale.profit}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SalesData;
