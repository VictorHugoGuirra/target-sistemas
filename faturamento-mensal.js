// Dados de faturamento por estado
const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  // Função para calcular o percentual de faturamento por estado
  function calcularPercentuais(faturamento) {
    // Calcula o faturamento total
    let faturamentoTotal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
  
    // Exibe o faturamento total
    console.log(`Faturamento total: R$ ${faturamentoTotal.toFixed(2)}`);
  
    // Calcula e exibe o percentual de cada estado
    for (let estado in faturamento) {
      let percentual = (faturamento[estado] / faturamentoTotal) * 100;
      console.log(`Percentual de ${estado}: ${percentual.toFixed(2)}%`);
    }
  }
  
  // Chama a função com os dados de faturamento
  calcularPercentuais(faturamentoEstados);
  