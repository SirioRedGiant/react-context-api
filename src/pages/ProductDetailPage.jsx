import axios from "axios";
import { useEffect, useState } from "react";
//note  HOOK --> che ci permette di leggere i parametri dell'url
import { useParams, Link, useNavigate } from "react-router-dom"; // lo importo

export default function ProductDetailPage() {
  const { id } = useParams(); //  lo invoco
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const currentId = Number(id); // l'url restituisce una stringa così com'è(se facessi id + 1 => "1" + 1 = 11) quindi bisogna convertire in numero

  useEffect(() => {
    setIsLoading(true); // per avviare il reset del loading quando cambia l'ID
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.data) {
          navigate("/products"); // se l'api risponde ma il prodotto è null
        } else {
          setProduct(res.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        navigate("/products");
      });
  }, [id]);

  //note funzioni per la NAVIGAZIONE PROGRAMMATICA
  const goToNext = () => navigate(`/products/${currentId + 1}`);
  const goToPrev = () => {
    if (currentId > 1) {
      navigate(`/products/${currentId - 1}`);
    }
  };

  if (isLoading) {
    return (
      <div className="container py-5">
        <h2>
          Loading details...Today you are very lucky to find this product!
        </h2>
      </div>
    );
  }
  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">404 - Product disappeared! 🕵️‍♂️</h2>
        <p>Maybe it never existed, or our server is just lazy.</p>
        <Link to="/products" className="btn btn-primary">
          Go back and try again
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <Link to="/products" className="btn btn-outline-secondary mb-4">
        ← Back to Products
      </Link>
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="col-md-6">
          <span className="badge bg-secondary mb-2">{product.category}</span>
          <h1 className="fw-bold">{product.title}</h1>
          <p className="lead text-muted">{product.description}</p>
          <h2 className="text-primary my-4">
            {
              Number.isInteger(product.price)
                ? Math.floor(product.price) // Se è intero no decimali
                : product.price.toFixed(2) // Se ha decimali ce ne saranno 2
            }
            €
          </h2>
          {Number.isInteger(product.price) && (
            <div className="alert alert-warning border-danger d-flex align-items-center gap-3 animate__animated animate__bounceIn-1s">
              <div>
                <p className="text-danger fw-bold animate__animated animate__heartBeat animate__infinite">
                  They want to confuse you with the comma... but NOT ME! I’m
                  throwing the cents in the trash! It’s FLAT PRICE of pure
                  excellence! Forget the change, keep the QUALITY!
                </p>
              </div>
              <img
                src="https://media.tenor.com/fMDrArD3H2IAAAAM/moustache-italian-cult-tv.gif"
                alt="Meme celebration"
                style={{ width: "400px", borderRadius: "10px" }}
                className="animate__animated animate__shakeY animate__infinite animate__slower"
              />
            </div>
          )}
          <button
            className="btn btn-success btn-lg"
            onClick={() => alert("not yet, Snaaake!...")}
          >
            Add to Cart (Real this time?)
          </button>
        </div>
      </div>
      {/* BARRA DI NAVIGAZIONE PROGRAMMATICA */}
      <div className="d-flex justify-content-between align-items-center  mb-4 p-3 bg-light shadow-sm ">
        <button
          className="btn btn-outline-dark"
          onClick={goToPrev}
          disabled={currentId <= 1} // Disabilita se al primo prodotto
        >
          ← Previous Product
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={goToNext}
          disabled={currentId >= 20} // Disabilità all'ultimo prodotto
        >
          Next Product →
        </button>
      </div>
    </div>
  );
}
