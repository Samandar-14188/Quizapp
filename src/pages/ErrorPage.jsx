import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-container container">
      {error.status === 404 ? (
        <div>
          <h3>Come back with a coffee - sometimes the pages find themselves! ☕</h3>
          <Link to="/" className="btn">Go To Home</Link>
        </div>
      ) : (
        <div>
          <h3>Oops! Looks like our web page did a somersault amd landed in a digital rabbit hole. We're working on untangling the code. Hang tight!☕</h3>
          <Link to="/" className="btn">Go To Home</Link>
        </div>      )}
    </div>
  );
}
