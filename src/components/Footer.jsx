import React from "react";

function Footer() {
  return (
    <>
      <footer style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-white">Your Feedback:</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="emailInput" className="text-white">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="feedbackInput" className="text-white">
                    Feedback
                  </label>
                  <textarea
                    className="form-control"
                    id="feedbackInput"
                    rows="5"
                    placeholder="Enter your feedback"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-4">
              <h5 className="mb-3 text-white">Supported by:</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.mncvision.id" className="text-white">
                    MASTERCHEF ASIA
                  </a>
                </li>
                <li>
                  <a href="https://hboasia.com" className="text-white">
                    HBOTV
                  </a>
                </li>
                <li>
                  <a href="https://www.rakuten.com/" className="text-white">
                    RAKUTEN TV
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="mb-3 text-white">Pepatah tentang Makanan:</h5>
              <img
                src="/src/assets/bg/logonavbar-removebg-preview.png"
                alt="Pepatah tentang Makanan"
              />
              <p className="text-white">
                "Makanan adalah kebutuhan pokok manusia. Tanpa makanan yang baik
                dan sehat, kita tidak dapat menjalani kehidupan yang bermakna."
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
