import styles from './Error.module.css';

function Error({ error }) {
  return (
    <div className={styles.error_container}>
      <div className={styles.message}>
        <h3>{error.message.codObjeto}</h3>
        <p>{error.message.mensagem}</p>
      </div>
    </div>
  )
}

export default Error;