import Button from '@/app/_components/button';
import { Input } from '@/app/_components/input';
import CenterContainer from '@/app/_components/layout/center-container';
import ModalContainer from '@/app/_components/modal/modal-container';

export default function AddSingleLinkModal() {
	return (
		<CenterContainer>
			<ModalContainer title="링크 추가">
				<form>
					<Input title="URL" />
					<Button className="mt-10 w-full">추가</Button>
				</form>
			</ModalContainer>
		</CenterContainer>
	);
}
