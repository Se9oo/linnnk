import CenterContainer from '@/app/_components/layout/center-container';
import AddSingleLinkForm from '@/app/_components/menu/add-single-link-form';
import ModalContainer from '@/app/_components/modal/modal-container';

export default function AddSingleLinkModal() {
	return (
		<CenterContainer>
			<ModalContainer title="링크 추가">
				<AddSingleLinkForm />
			</ModalContainer>
		</CenterContainer>
	);
}
