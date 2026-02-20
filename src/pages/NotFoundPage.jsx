import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-1 fw-bold text-danger animate__animated animate__hinge animate__delay-2s">
        404! look at the radar.
      </h1>
      <h2>Snake? SNAAAAAKE!</h2>
      <p>You and this page fell off the map.</p>
      <Link to="/products/" className="btn btn-primary mt-3">
        Back to Safety? Here we go again
      </Link>
    </div>
  );
}
