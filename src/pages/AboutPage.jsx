export default function AboutPage() {
  return (
    <div className="container py-5">
      <section className="text-center mb-5 px-3">
        <h1 className="display-4 fw-bold text-warning animate__animated animate__jackInTheBox">
          Our "Success" Story
        </h1>
        <p
          className="lead mt-3 text-muted mx-auto"
          style={{ maxWidth: "700px" }}
        >
          Founded in 2024 due to a massive typo,
          <strong> Sirio's Businesses</strong> is the only e-commerce in the
          world that guarantees your order will remain a secret... even to us.
        </p>
      </section>

      <div className="row g-4 mb-5">
        <div className="col-12 col-md-4 text-center">
          <div className="card h-100 border-0 shadow-sm p-4 bg-light">
            <div className="fs-1">📉</div>
            <h4 className="fw-bold mt-3">Vision</h4>
            <p className="small text-secondary">
              Our goal is to become the main reason why people worldwide decide
              to stop shopping online forever.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center">
          <div className="card h-100 border-0 shadow-sm p-4 bg-light">
            <div className="fs-1">🏚️</div>
            <h4 className="fw-bold mt-3">Headquarters</h4>
            <p className="small text-secondary">
              Our office is a flooded garage. If you hear splashing sounds
              during our calls, it's just the business flowing.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center">
          <div className="card h-100 border-0 shadow-sm p-4 bg-light">
            <div className="fs-1">💤</div>
            <h4 className="fw-bold mt-3">Team Support</h4>
            <p className="small text-secondary">
              Our experts are currently taking a nap. Please try again in a
              couple of decades.
            </p>
          </div>
        </div>
      </div>

      <div className="row align-items-center bg-dark text-white rounded-5 p-4 p-md-5 shadow-lg overflow-hidden mx-1">
        <div className="col-12 col-md-6">
          <h2 className="fw-bold mb-4">Meet the CEO</h2>
          <p className="fst-italic">
            "I have no idea what I'm doing, but I'm doing it with top-tier CSS."
          </p>
          <p className="text-warning fw-bold">
            - Sirio, Founder & Chaos Architect
          </p>
          <ul className="list-unstyled mt-4">
            <li className="mb-2">✅ 404 Link Specialist</li>
            <li className="mb-2">✅ Empty Box Shipping Champion</li>
            <li className="mb-2">✅ Professional Ghoster of Customer Emails</li>
          </ul>
        </div>

        <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
          <img
            src="https://media1.tenor.com/m/2IpIz72AQwoAAAAd/south-park.gif"
            alt="Retard Alert South Park"
            className="img-fluid rounded-circle border border-5 border-warning shadow-lg animate__animated animate__shakeX animate__infinite"
            style={{
              width: "280px",
              height: "280px",
              objectFit: "cover",
              filter: "contrast(1.2) brightness(1.1)",
            }}
          />
          <p className="text-warning mt-2 small fw-bold">
            LIVE STREAM FROM THE OFFICE
          </p>
        </div>
      </div>

      <div className="text-center mt-5 px-3">
        <p className="text-muted">
          Are you convinced yet? You are a legend.{" "}
          <br className="d-none d-md-block" />
          Do yourself a favor and ignore the button below.
        </p>
        <button
          className="btn btn-disgusting px-4 py-2 animate__animated animate__slow animate__infinite animate__pulse"
          onClick={() =>
            alert(
              "Error: The 'I'm not interested' button is broken. You must buy something now.",
            )
          }
        >
          🤢 DON'T CLICK HERE 🤢
        </button>
      </div>
    </div>
  );
}
