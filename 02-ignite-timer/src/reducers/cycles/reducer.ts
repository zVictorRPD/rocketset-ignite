import { ActionTypes } from "./actions";
import { produce } from "immer";

export interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

interface CyclesState {
    cycles: Cycle[];
    activeCycleId: string | null;
}

export function cyclesReducer(state: CyclesState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_CYCLE:
            return produce(state, (draftState) => {
                draftState.cycles.push(action.payload.newCycle);
                draftState.activeCycleId = action.payload.newCycle.id;
            });

        case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
            const cycleIndex = state.cycles.findIndex(
                (cycle) => cycle.id === state.activeCycleId
            );

            return produce(state, (draftState) => {
                draftState.cycles[cycleIndex].finishedDate = new Date();
                draftState.activeCycleId = null;
            });
        }

        case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
            const cycleIndex = state.cycles.findIndex(
                (cycle) => cycle.id === state.activeCycleId
            );

            return produce(state, (draftState) => {
                draftState.cycles[cycleIndex].interruptedDate = new Date();
                draftState.activeCycleId = null;
            });
        }

        default:
            return state;
    }
}
