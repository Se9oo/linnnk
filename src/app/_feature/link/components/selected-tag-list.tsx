import { useWatch } from 'react-hook-form';

import Chip from '@/app/_components/chip';

export default function SelectedTagList() {
	const { tags } = useWatch<AddSingleLinkFormType>();

	const tagList = tags?.filter((tag) => tag.isSelected);

	return (
		<ul className="mt-4 flex w-full flex-nowrap items-center gap-2 overflow-x-auto py-4">
			{tagList?.map((tag) => (
				<li key={tag.id}>
					<Chip name={tag.tagName || ''} />
				</li>
			))}
		</ul>
	);
}
