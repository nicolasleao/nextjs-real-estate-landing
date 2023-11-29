import api, { handleValidationError } from "./index";

export const generateSimulationPdf = async (
  simulationId: string,
  bankName: string,
) => {
  try {
    const res = await api.get(`/pdf/simulation/${simulationId}`, {
      responseType: "arraybuffer",
      params: {
        bank: bankName,
      },
    });
    return res.data;
  } catch (e: any) {
    return handleValidationError(e);
  }
};
