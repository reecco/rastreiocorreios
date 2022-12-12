import format from 'date-format'

import styles from './Localizacao.module.css'

function Localizacao({ results, code }) {
  const url = 'https://rastreamento.correios.com.br/static/rastreamento-internet/imgs/'

  const newResults = []

  Object.keys(results).forEach(result => {
    let dtHrCriado = format.asString('dd/MM/yyyy hh:mm:ss', new Date(results[result].dtHrCriado))

    newResults.push(results[result].dtHrCriadoFormatted = dtHrCriado)
  })

  return (
    <div className={styles.container_results}>
      <h3>{code}</h3>
      <div className={styles.error_container}>
        {Object.keys(newResults).length === 0 ? '' :
          results.map((result, index) => {
            return (
              <div className={styles.result} key={index}>
                <img
                  src={url + result.urlIcone.replace('/public-resources/img/', '')}
                  alt="Correios icon" />
                <div className={styles.container_local}>
                  <h4>{result.descricao}</h4>
                  <div className={styles.localization}>
                    {result.unidadeDestino ? (
                      <div>
                        <p>De {result.unidade.tipo}, {result.unidade.endereco.cidade} - {result.unidade.endereco.uf}</p>
                        <p>Para {result.unidadeDestino.tipo}, {result.unidade.endereco.cidade} - {result.unidade.endereco.uf}</p>
                      </div>
                    ) : (
                      <p>{result.unidade.tipo}, {result.unidade.endereco.cidade} - {result.unidade.endereco.uf}</p>
                    )}
                  </div>
                  <p className={styles.date}>{result.dtHrCriadoFormatted}</p>
                  <br />
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Localizacao