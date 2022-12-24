import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

import styles from './Encomenda.module.css';
import Localizacao from "../views/Localizacao/Localizacao";
import Error from '../views/Error/Error';
// import loader from '../imgs/loading.svg';

function Encomenda() {
  const [results, setResults] = useState({});
  const [error, setError] = useState({});
  const [code, setCode] = useState('');
  const [alert, setAlert] = useState('');
  const [loading, setLoading] = useState(false);

  document.title = 'Rastrear Encomendas';

  async function rastreiaEncomenda(event) {
    event.preventDefault();
    setError('');
    setResults('');
    setCode('');

    let input = event.target.code.value;

    if (input === '' || input === ' ') {
      setAlert('O campo não pode estar vazio');

      setTimeout(() => setAlert(''), 5000);
      return;
    }
    setLoading(true);
    setTimeout(async () => {
      await fetch(`https://correios-xi.vercel.app/rastreio/${input}`)
        .then(res => res.json())
        .then(data => {
          if (data.status === 404) {
            event.target.code.value = '';
            setResults('');
            setError(data);
            setLoading(false);
            return;
          }
          setError('');
          setCode(event.target.code.value);
          setResults(data.encomenda);
          event.target.code.value = '';
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        })
    }, 5000)
  }

  return (
    <div className={styles.rastreio_container}>
      <h1>Rastrear Encomenda</h1>
      <form className={styles.form} onSubmit={rastreiaEncomenda}>
        <div className={styles.box}>
          <p>{alert}</p>
          <div className={styles.container_form}>
            <input type="text" name="code" id="code" placeholder="AR050703010BR" />
            <button><HiMagnifyingGlass /></button>
          </div>
        </div>
      </form>
      <div id="loader" className={styles.loader}>
        {/* { loading && (<img className={styles.loading} src={loader} />) } */}
        { loading && (<span id="loading" className={styles.loading}></span>) }
      </div>
      {error.status ? (
        <Error error={error} />
      ) : <Localizacao results={results} code={code} />}
    </div>
  )
}

export default Encomenda;