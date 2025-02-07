import React from "react";

const City = () => {
  const cities = [
    {
      id: 1,
      cityname: "New York",
      population: 2219600,
      AQI: 255,
    },
    {
      id: 2,
      cityname: "Los Angeles",
      population: 3980400,
      AQI: 385,
    },
    {
      id: 3,
      cityname: "Chicago",
      population: 2716000,
      AQI: 270,
    },
    {
      id: 4,
      cityname: "Houston",
      population: 2328000,
      AQI: 3100,
    },
    {
      id: 5,
      cityname: "Phoenix",
      population: 1690000,
      AQI: 395,
    },
    {
      id: 6,
      cityname: "Philadelphia",
      population: 1584200,
      AQI: 290,
    },
    {
      id: 7,
      cityname: "San Antonio",
      population: 1547200,
      AQI: 360,
    },
    {
      id: 8,
      cityname: "San Diego",
      population: 1423851,
      AQI: 365,
    },
    {
      id: 9,
      cityname: "Dallas",
      population: 1341075,
      AQI: 110,
    },
    {
      id: 10,
      cityname: "San Jose",
      population: 1035000,
      AQI: 250,
    },
    {
      id: 11,
      cityname: "Austin",
      population: 965000,
      AQI: 255,
    },
    {
      id: 12,
      cityname: "Jacksonville",
      population: 911507,
      AQI: 372,
    },
    {
      id: 13,
      cityname: "Fort Worth",
      population: 909585,
      AQI: 85,
    },
    {
      id: 14,
      cityname: "Columbus",
      population: 898553,
      AQI: 395,
    },
    {
      id: 15,
      cityname: "Indianapolis",
      population: 876384,
      AQI: 88,
    },
    {
      id: 16,
      cityname: "Charlotte",
      population: 874579,
      AQI: 460,
    },
    {
      id: 17,
      cityname: "Seattle",
      population: 753675,
      AQI: 80,
    },
    {
      id: 18,
      cityname: "Denver",
      population: 715522,
      AQI: 270,
    },
    {
      id: 19,
      cityname: "Washington",
      population: 705749,
      AQI: 65,
    },
    {
      id: 20,
      cityname: "Boston",
      population: 692600,
      AQI: 375,
    },
  ];

  return (
    <div>
      <table className="table table-dark" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>CITYNAME</th>
            <th>POPULATION</th>
            <th>AQI</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => {
            return (
              <tr>
                <td>{city.id}</td>
                <td>{city.cityname}</td>
                <td
                  style={{
                    backgroundColor:
                      city.population > 200000 && city.population < 1000000
                        ? "red"
                        : "",
                  }}
                >
                  {city.population}
                </td>
                <td
                  style={{
                    color: city.AQI > 300 ? "red" : "",
                    backgroundColor: city.AQI < 200 ? "green" : "",
                  }}
                >
                  {city.AQI}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default City;
