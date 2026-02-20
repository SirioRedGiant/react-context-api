import { useEffect, useState, useContext } from "react"; //^ l'hook useContext
import { BudgetContext } from "../context/BudgetContext"; //^ il context
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //todo --> "sintonizzarsi alla frequenza radio" per sapere se la mod. budget è attiva
  const { budgetMode } = useContext(BudgetContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        //note --> MANIPOLAZIONE DEI DATI: dati modificati partendo da response.data
        const productsData = response.data.map((prod) => {
          //response data è l'array orriginale di 20 prodotti --> il metodo .map() crea un nuovo array. Per ogni prodotto (prod) esegue una funzione e salva il risultato nel nuovo array --> ProductsData, questo perchè non si vuole modificare l'originale, ma creare una versione "personalizzata" da utilizzare per le card

          const maxLength = 26; // Se il titolo è lungo, prendiamo gli ultimi 26 caratteri

          const shortTitle =
            prod.title.length > maxLength
              ? "..." + prod.title.substring(prod.title.length - maxLength)
              : prod.title;

          return {
            ...prod, // Lo "Spread Operator" copia tutte le proprietà originali (id, title, price, image, ecc.)
            title: shortTitle, // Sovrascrive solo la proprietà title con la versione corta
          };
        });

        setProducts(productsData); // alla fine si passa questo nuovo array "pulito" allo stato di React. Quando React vede il nuovo stato, avvia il re-render e mostra i titoli accorciati nelle card.

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dati:", error);
        setIsLoading(false);
      });
  }, []); // L'array vuoto serve a far partire la chiamata una volta sola

  //todo un nuovo array filtrato in base allo stato del Context
  const filteredProducts = budgetMode
    ? products.filter((product) => product.price <= 30) // Se ON
    : products; // Se OFF

  //note

  //note Se sta caricando --> mostra un messaggio
  if (isLoading) {
    return <h2>Loading unexpectedly excellent products...</h2>;
  }
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">
        {budgetMode ? "Baffo 🥸 friendly selection for you" : "our products"}
      </h1>
      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 p-3 shadow-sm text-center">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{ height: "150px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title" title={product.title}>
                  {product.title}
                </h5>
                <p className="text-muted small text-uppercase">
                  {product.category}
                </p>
                <p className="h5 text-primary">{product.price.toFixed(2)} €</p>
                <button className="btn btn-primary mt-auto">
                  Add to your card
                </button>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-outline-dark"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredProducts.length === 0 && budgetMode && (
        <div className="text-center mt-5">
          <img
            src="https://media.tenor.com/gVoYG0MiA5oAAAAM/bello-baffo-roberto.gif"
            alt="Da Crema had enough about yours requestes"
            className="img-fluid rounded-circle border border-5 border-warning shadow-lg animate__animated animate__shakeX animate__infinite"
            style={{
              width: "280px",
              height: "280px",
              objectFit: "cover",
              filter: "contrast(1.2) brightness(1.1)",
            }}
          />
          <h3>
            You want a lower price?! You're looking for ghosts! That price
            doesn't exist! This is the bottom, this is the truth!
          </h3>
        </div>
      )}
    </div>
  );
}
