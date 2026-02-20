import { createContext, useState } from "react";
// createContext: serve a creare la "stazione radio" (il contesto)
// useState: serve a creare lo stato che vogliamo condividere (acceso/spento)

/*//^ Il Context API è lo strumento che React ci offre per evitare il "Prop Drilling" (passare dati da padre a figlio per mille livelli). Context API è come una stazione radio: il Context trasmette il segnale (i dati), e solo i componenti che si sintonizzano alla radio (usando il Consumer o l'Hook) ricevono le informazioni. */

//note --> OGGETTO CONTEXT: la frequenza radio vuota
export const BudgetContext = createContext();

//note --> IL COMPONENTE PROVIDER: questo componente avvolgerà l'App e "distribuirà" i dati.
export function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false); // lo stato da condividere

  // La funzione per invertire lo stato (Toggle)
  const toggleBudgetMode = () => {
    setBudgetMode((prev) => !prev);
  };

  return (
    //note "Value" contiene tutto ciò che bisogna rendere disponibile agli altri componenti
    <BudgetContext.Provider
      value={{ budgetMode, setBudgetMode, toggleBudgetMode }}
    >
      {children}
    </BudgetContext.Provider>
  );
}
