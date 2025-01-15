import { useState } from 'react';

import Button from '@/app/_components/button';
import SVGIcon from '@/app/_components/icon/svg-icon';
import { Input } from '@/app/_components/input';

interface AddNewTagProps {
	onAddNewTag: (tagName: string) => void;
}

export default function AddNewTag({ onAddNewTag }: AddNewTagProps) {
	const [newTag, setNewTag] = useState<string>('');

	const handleAddNewTag = () => {
		if (newTag !== '') {
			onAddNewTag(newTag);
			setNewTag('');
		}
	};

	return (
		<>
			<Input.Container className="flex items-end gap-2 [&>div]:w-[80%]">
				<Input title="새로운 태그 등록" value={newTag} onChange={(e) => setNewTag(e.target.value)} />
				<Button onClick={handleAddNewTag}>
					<SVGIcon icon="plus" className="stroke-white" />
				</Button>
			</Input.Container>
		</>
	);
}
