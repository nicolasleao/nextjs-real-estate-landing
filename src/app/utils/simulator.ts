export const financiarSac = (vP: number, n: number, i: number) => {
  /* Aplicamos a fórmula de financiamento com base na tabela SAC */
  const amortizacao = vP / n;
  const pmt = [];
  for (let y = 0; y < n; y++) {
    let prestacao = amortizacao + i * (vP - y * amortizacao);
    pmt.push(Number(prestacao.toFixed(2)));
  }
  let totalPago = 0;
  for (let p = 0; p < n; p++) {
    totalPago += pmt[p];
  }
  const totalJuros = totalPago - vP;
  return {
    parcelas: pmt,
    totalPago,
    totalJuros,
  };
};