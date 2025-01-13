import { nanoid } from 'nanoid';
import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import Button from '@/app/_components/button';
import Checkbox from '@/app/_components/input/checkbox';
import AddNewTag from '@/app/_feature/tag/components/add-new-tag';

import { useFunnelActions } from '@/stores/funnel';

export default function TagSelector() {
	const { setCurrentStep } = useFunnelActions();

	const { control } = useFormContext<AddSingleLinkFormType>();
	const { fields, append } = useFieldArray({ control, name: 'tags' });

	const handleAddNewTag = useCallback((tagName: string) => {
		append({ id: nanoid(), tagName, isSelected: true });
	}, []);

	return (
		<>
			<ul className="grid max-h-[50%] grid-cols-2 gap-4 overflow-y-auto border-b py-4">
				{fields.map((tag, idx) => (
					<li key={`${tag.id}.${idx}`} className="py-1">
						<Checkbox id={`tags.${idx}.isSelected`} name={tag.tagName} />
					</li>
				))}
			</ul>
			<div className="absolute bottom-4 left-[50%] w-full translate-x-[-50%] px-6">
				<AddNewTag onAddNewTag={handleAddNewTag} />
				<Button className="mt-4 w-full" onClick={() => setCurrentStep('form')}>
					확인
				</Button>
			</div>
		</>
	);
}
