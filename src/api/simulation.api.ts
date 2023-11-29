import api, { handleValidationError } from "./index";

interface SimulationPayload {
  name: string;
  email: string;
  documentNo: string;
  totalValue: number;
  downPayment: number;
  installments: number;
}

export const createSimulation = async (payload: SimulationPayload) => {
  try {
    const res = await api.post("/simulations", payload);
    return res.data;
  } catch (e: any) {
    return handleValidationError(e);
  }
};

export const fetchSimulation = async (id: string) => {
  try {
    const res = await api.get(`/simulations/${id}`);
    return res.data;
  } catch (e: any) {
    return handleValidationError(e);
  }
};
