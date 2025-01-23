// Dados de faturamento mensal em formato JSON
const dadosFaturamento = {
    "faturamento_diario": [
      {"dia": 1, "valor": 200},
      {"dia": 2, "valor": 150},
      {"dia": 3, "valor": 0},  // Feriado ou dia sem faturamento
      {"dia": 4, "valor": 180},
      {"dia": 5, "valor": 220},
      {"dia": 6, "valor": 0},  // Fim de semana ou sem faturamento
      {"dia": 7, "valor": 210},
      {"dia": 8, "valor": 190},
      {"dia": 9, "valor": 0},  // Feriado ou dia sem faturamento
      {"dia": 10, "valor": 250},
      {"dia": 11, "valor": 0},  // Fim de semana
      {"dia": 12, "valor": 240}
    ]
  };
  
  // Função para calcular as informações solicitadas
  function calcularFaturamento(dados) {
    let valores = dados.faturamento_diario.map(dia => dia.valor).filter(valor => valor > 0); // Filtra os dias com faturamento
    let totalFaturamento = valores.reduce((acc, valor) => acc + valor, 0);
    let mediaMensal = totalFaturamento / valores.length; // Calcula a média mensal (considerando apenas dias com faturamento)
  
    // Menor e maior valor de faturamento
    let menorFaturamento = Math.min(...valores);
    let maiorFaturamento = Math.max(...valores);
  
    // Contagem dos dias com faturamento superior à média
    let diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;
  
    // Exibe os resultados
    console.log(`Menor faturamento: R$ ${menorFaturamento}`);
    console.log(`Maior faturamento: R$ ${maiorFaturamento}`);
    console.log(`Média mensal de faturamento: R$ ${mediaMensal.toFixed(2)}`);
    console.log(`Número de dias com faturamento superior à média: ${diasAcimaDaMedia}`);
  }
  
  // Chama a função com os dados de faturamento
  calcularFaturamento(dadosFaturamento);
  