import SVGButton from '@/app/_components/button/svg-button';

import { useModalActions } from '@/stores/modal';

interface ModalContainerProps {
	children: React.ReactNode;
	title?: string;
}

function ModalHeader({ title }: { title?: string }) {
	return (
		<div className={`mb-4 flex items-center ${title ? 'justify-between' : 'justify-end'}`}>
			{title && <h3 className="text-xl font-semibold">{title}</h3>}
			<CloseButton />
		</div>
	);
}

function CloseButton() {
	const { closeModal } = useModalActions();

	return <SVGButton icon="x" onClick={closeModal} width={36} height={36} />;
}

export default function ModalContainer({ children, title }: ModalContainerProps) {
	return (
		<div className="relative max-h-[80%] w-[80%] rounded-xl bg-white p-6">
			<ModalHeader title={title} />
			{children}
		</div>
	);
}
