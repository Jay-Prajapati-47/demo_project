import React from "react";

const Content = () => {
  var name = "jay";
  var age = 25;
  var isActive = true;
  var isActive1 = false;
  const user = {
    fName: "harshil",
    lName: "Prajapati",
    age: 51,
  };
  return (
    <div>
      <h1>Name = {name}</h1>
      <h1>Age = {age}</h1>
      <h1>
        isActive = {isActive == true ? "User is active" : "User is Not active"}
      </h1>
      <h1>
        isActive = {isActive1 == true ? "User is active" : "User is Not active"}
      </h1>
      <h2>{user.fName}</h2>
      <h2>{user.lName}</h2>
      <h2>{user.age}</h2>
      <div class="container">
        <h1>User Biodata</h1>

        <div class="section">
          <h2>Personal Information</h2>
          <p>
            <strong>Name:</strong> Jay Prajapati
          </p>
          <p>
            <strong>Date of Birth:</strong> july 4, 2004
          </p>
          <p>
            <strong>Gender:</strong> Male
          </p>
          <p>
            <strong>Nationality:</strong> India
          </p>
        </div>

        <div class="section">
          <h2>Contact Information</h2>
          <p>
            <strong>Email:</strong> codewithjay236@gmail
          </p>
          <p>
            <strong>Phone:</strong> +91 9054838880
          </p>
          <p>
            <strong>Address:</strong> 8-141 Nagar Vaniya Nivas, Lodra - 382835
          </p>
        </div>

        <div class="section">
          <h2>Education</h2>
          <p>
            <strong>Degree:</strong> Bachelor of Engineering in Computer
            Engineering
          </p>
          <p>
            <strong>University:</strong> GTU
          </p>
          <p>
            <strong>Graduation Year:</strong> 2025
          </p>
        </div>

        <div class="section">
          <h2>Work Experience</h2>
          <p>
            <strong>Job Title:</strong> Software Developer Engineer
          </p>
          <p>
            <strong>Company:</strong> Royal Technosoft Pvt. Ltd
          </p>
          <p>
            <strong>Duration:</strong> 2025 - Present
          </p>
          <p>
            <strong>Responsibilities:</strong> Develop software applications,
            manage databases, work with clients to improve technology solutions.
          </p>
        </div>

        <div class="section">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript, Python, HTML/CSS</li>
            <li>Web Development</li>
            <li>Database Management (SQL, MongoDB)</li>
            <li>Project Management</li>
          </ul>
        </div>

        <div class="footer">
          <p>Created with love and care by Jay Prajapati</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
