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

/**
 * Format to Brazilian currency
 */
export const maskToCurrency = ({ nextState }: any) => {
  const { value } = nextState || {}

  let amountFormatted = value?.replace?.(/\D/g, '')
  amountFormatted = amountFormatted?.replace?.(/^0+/g, '')

  if (amountFormatted?.length === 2) {
    return {
      ...nextState,
      value: `R$ ${amountFormatted}`,
      selection: {
        start: amountFormatted.length + 3,
        end: amountFormatted.length + 3
      }
    }
  }

  const amountFormattedWithComma = amountFormatted?.replace?.(
    /(?=\d{2})(\d{2})$/,
    ',$1'
  )
  const amountFormattedWithDot = amountFormattedWithComma?.replace?.(
    /(\d)(?=(\d{3})+(?!\d))/g,
    '$1.'
  )

  if (amountFormattedWithDot) {
    console.log({
      ...nextState,
      value: `R$ ${amountFormattedWithDot}`,
      selection: {
        start: amountFormattedWithDot.length + 3,
        end: amountFormattedWithDot.length + 3
      }
    })
    return {
      ...nextState,
      value: `R$ ${amountFormattedWithDot}`,
      selection: {
        start: amountFormattedWithDot.length + 3,
        end: amountFormattedWithDot.length + 3
      }
    }
  } else {
    console.log('faio')
  }

  return nextState
}