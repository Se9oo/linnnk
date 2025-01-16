import { useFieldArray, useFormContext } from 'react-hook-form';

import Checkbox from '@/app/_components/input/checkbox';

export default function LinkList() {
	const { control } = useFormContext<AddSingleLinkFormType>();
	const { fields } = useFieldArray({
		control,
		name: 'linkList',
	});

	return (
		<section className="mt-6">
			<h3 className="text-lg">추가할 링크 리스트 선택</h3>
			<ul className="mt-4 flex flex-col justify-center gap-4">
				{fields.map((linkList, idx) => {
					const { id, title } = linkList;

					return (
						<li key={`${id}.${idx}`}>
							<Checkbox id={`linkList.${idx}.isSelected`} name={title} />
						</li>
					);
				})}
			</ul>
		</section>
	);
}
