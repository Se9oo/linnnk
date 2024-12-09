import { nanoid } from 'nanoid';
import { create } from 'zustand';

interface ModalType {
	id: string;
	component: React.ReactNode;
}

interface ModalState {
	activeModals: ModalType[];
	actions: {
		openModal: (modalContent: { modalContent: React.ReactNode }) => void;
		closeModal: () => void;
		clearActiveModals: () => void;
	};
}

const useModalStore = create<ModalState>((set) => ({
	activeModals: [],
	actions: {
		openModal: ({ modalContent }) =>
			set((state) => ({
				activeModals: [...state.activeModals, { id: nanoid(), component: modalContent }],
			})),
		closeModal: () =>
			set((state) => ({
				activeModals: [...state.activeModals].slice(0, -1),
			})),
		clearActiveModals: () =>
			set(() => ({
				activeModals: [],
			})),
	},
}));

export const useActiveModals = () => useModalStore((state) => state.activeModals);
export const useModalActions = () => useModalStore((state) => state.actions);
