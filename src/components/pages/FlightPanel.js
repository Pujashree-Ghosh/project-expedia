import React from "react";

function Fight() {
  return (
    <>
      <Form>
        <Row>
          <Col>
            <div className="collapsible">
              <Button
                className="toggle"
                variant="contained"
                style={{ padding: "10px", margin: "5px" }}
                value="Return"
                onClick={() => setReturrn(!returrn)}
              >
                Return
              </Button>

              {returrn && (
                <div className="content">
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Leaving From"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      value={from}
                      onChange={handleFrom}
                    >
                      <option value=""></option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Pune">Pune</option>
                    </Form.Select>
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Going To"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      value={place}
                      onChange={handleChangePlace}
                    >
                      <option value=""></option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Pune">Pune</option>
                    </Form.Select>
                  </FloatingLabel>

                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    className="checkIn"
                  >
                    <DatePicker
                      format="dd/MM/yyyy"
                      label="Departing"
                      minDate={new Date()}
                      value={checkInDate}
                      onChange={(newDate) => {
                        setCheckInDate(newDate);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Returning"
                      dateFormat="DD/MM/YYYY"
                      minDate={new Date()}
                      value={checkOutDate}
                      onChange={(newDate) => {
                        setCheckOutDate(newDate);
                      }}
                      style={{ padding: "10px", margin: "5px" }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              )}
            </div>
          </Col>

          {/* One-way */}
          <Col>
            <Button
              variant="contained"
              style={{ padding: "10px", margin: "5px" }}
              value="OneWay"
              onClick={() => setOneWay(!oneWay)}
            >
              One-Way
            </Button>
            {oneWay && (
              <div className="content">
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Leaving From"
                >
                  <Form.Select
                    aria-label="Floating label select example"
                    value={from}
                    onChange={handleFrom}
                  >
                    <option value=""></option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                  </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="floatingSelectGrid" label="Going To">
                  <Form.Select
                    aria-label="Floating label select example"
                    value={place}
                    onChange={handleChangePlace}
                  >
                    <option value=""></option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                  </Form.Select>
                </FloatingLabel>

                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  className="checkIn"
                >
                  <DatePicker
                    format="dd/MM/yyyy"
                    label="Departing"
                    minDate={new Date()}
                    value={checkInDate}
                    onChange={(newDate) => {
                      setCheckInDate(newDate);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            )}
          </Col>
          {/* Multi-City */}
          <Col>
            <Button
              variant="contained"
              style={{ padding: "10px", margin: "5px" }}
              value="MultiCity"
              onClick={() => setMultiCity(!multiCity)}
            >
              Multi-city
            </Button>
            {multiCity && (
              <div className="content">
                Flight 1
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Leaving From"
                >
                  <Form.Select
                    aria-label="Floating label select example"
                    value={from}
                    onChange={handleFrom}
                  >
                    <option value=""></option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                  </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelectGrid" label="Going To">
                  <Form.Select
                    aria-label="Floating label select example"
                    value={place}
                    onChange={handleChangePlace}
                  >
                    <option value=""></option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                  </Form.Select>
                </FloatingLabel>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  className="checkIn"
                >
                  <DatePicker
                    format="dd/MM/yyyy"
                    label="Departing"
                    minDate={new Date()}
                    value={checkInDate}
                    onChange={(newDate) => {
                      setCheckInDate(newDate);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                Flight 2
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Leaving From"
                >
                  <Form.Select
                    aria-label="Floating label select example"
                    value={flight2From}
                    onChange={handleFlight2From}
                  >
                    <option value=""></option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                  </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelectGrid" label="Going To">
                  <Form.Select
                    aria-label="Floating label select example"
                    value={flight2To}
                    onChange={handleFlight2To}
                  >
                    <option value=""></option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                  </Form.Select>
                </FloatingLabel>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  className="checkIn"
                >
                  <DatePicker
                    format="dd/MM/yyyy"
                    label="Departing"
                    minDate={new Date()}
                    value={flight2Date}
                    onChange={(newDate) => {
                      setFlight2Date(newDate);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            )}
          </Col>
        </Row>
        <Form.Select
          aria-label="Default select example"
          style={{ align: "right", width: "auto", border: "none" }}
        >
          <option value="Economy">Travellers</option>
          <option value="Premium Class">Premium Class</option>
          <option value="Business Class">Business Class</option>
          <option value="First Class">First Class</option>
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          style={{ align: "right", width: "auto", border: "none" }}
        >
          <option value="Economy">Economy</option>
          <option value="Premium Class">Premium Class</option>
          <option value="Business Class">Business Class</option>
          <option value="First Class">First Class</option>
        </Form.Select>
      </Form>
    </>
  );
}
export default Flight;
