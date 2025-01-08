import { create } from 'zustand';

interface FunnelState<T> {
	currentStep: T | undefined;
	actions: {
		setCurrentStep: (newState: T) => void;
		resetFunnelStore: () => void;
	};
}

const useFunnelStore = create<FunnelState<unknown>>((set) => ({
	currentStep: undefined,
	actions: {
		setCurrentStep: (newState) =>
			set(() => ({
				currentStep: newState,
			})),
		resetFunnelStore: () => set(() => ({ currentStep: undefined })),
	},
}));

export const useFunnelCurrentStep = () => useFunnelStore((state) => state.currentStep);
export const useFunnelActions = () => useFunnelStore((state) => state.actions);
