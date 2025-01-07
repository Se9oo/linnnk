import CenterContainer from '@/app/_components/layout/center-container';
import ModalContainer from '@/app/_components/modal/modal-container';
import AddSingleLinkForm from '@/app/_feature/footer/add-single-link-form';

export default function AddSingleLinkModal() {
	return (
		<CenterContainer>
			<ModalContainer title="링크 추가" className="h-[80%]">
				<AddSingleLinkForm />
			</ModalContainer>
		</CenterContainer>
	);
}
