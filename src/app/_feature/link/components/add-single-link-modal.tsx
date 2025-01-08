import CenterContainer from '@/app/_components/layout/center-container';
import ModalContainer from '@/app/_components/modal/modal-container';
import AddSingleLink from '@/app/_feature/link/components/add-single-link';

export default function AddSingleLinkModal() {
	return (
		<CenterContainer>
			<ModalContainer title="링크 추가" className="relative h-[calc(100%-48px)]">
				<AddSingleLink />
			</ModalContainer>
		</CenterContainer>
	);
}
