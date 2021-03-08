import React from "react";

export default function ShowApplicationsView({ token }) {
  return (
    <div>
      {/* <div>
        <p>Applicant:</p>
        <p>Email:</p>
        <p>SSN:</p>
        <p>Competence:</p>
        <p>Years of experience:</p>
        <p>Available from:</p>
        <p>Available to:</p>
        <p>Status:</p>
      </div> */}

      <div class="col-md-6 offset-md-3 mt-5">
        <h1 style={{ fontSize: 20, marginTop: 24, marginBottom: 24 }}>
          Simple Job Application Form
        </h1>
        <div>
          <label for="exampleInputName">Full Name</label>
          <input
            type="text"
            name="fullname"
            class="form-control"
            id="exampleInputName"
            placeholder="Enter your name and surname"
            required="required"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" required="required">
            Email address
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email address"
          />
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            name="address"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input
              type="text"
              name="city"
              class="form-control"
              id="inputCity"
              placeholder="Istanbul"
            />
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input
              type="text"
              name="zip"
              class="form-control"
              id="inputZip"
              placeholder="34000"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="example-tel-input" class="col-2 col-form-label">
            Telephone
          </label>
          <div class="col-10">
            <input
              class="form-control"
              name="tel"
              type="tel"
              value="1-(555)-555-5555"
              id="example-tel-input"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="example-date-input" class="col-3 col-form-label">
            Start Date
          </label>
          <div class="col-10">
            <input
              class="form-control"
              name="starting_date"
              type="date"
              value="2020-02-01"
              id="example-date-input"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}
