import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SimulationState {
    simulationId?: string,
    totalValue?: number,
    downPayment?: number
    installments?: number,
}

const initialState: SimulationState = {}

export const simulationSlice = createSlice({
    name: "simulation",
    initialState,
    reducers: {
        setSimulation: (state: any, action: PayloadAction<{
            simulationId: string,
            totalValue: number,
            downPayment: number,
            installments: number,
        }>) => {
            return {
                simulationId: action.payload.simulationId,
                totalValue: action.payload.totalValue,
                downPayment: action.payload.downPayment,
                installments: action.payload.installments,
            }
        }
    }
});

export const {
    setSimulation
} = simulationSlice.actions;
export default simulationSlice.reducer;