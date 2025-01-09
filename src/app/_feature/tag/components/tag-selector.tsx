import { useFieldArray, useFormContext } from 'react-hook-form';

import Button from '@/app/_components/button';
import SVGButton from '@/app/_components/button/svg-button';
import SVGIcon from '@/app/_components/icon/svg-icon';
import { Input } from '@/app/_components/input';
import Checkbox from '@/app/_components/input/checkbox';

import { useFunnelActions } from '@/stores/funnel';

export default function TagSelector() {
	const { setCurrentStep } = useFunnelActions();

	const { control } = useFormContext<AddSingleLinkFormType>();
	const { fields, append } = useFieldArray({ control, name: 'tags' });

	return (
		<>
			<ul className="grid h-[50%] gap-4 overflow-y-auto border-b">
				{fields.map((tag, idx) => (
					<li key={tag.id}>
						<Checkbox id={`tags.${idx}.isSelected`} name={tag.tagName} />
					</li>
				))}
			</ul>

			<div className="absolute bottom-4 left-[50%] w-full translate-x-[-50%] px-6">
				<Input.Container className="flex items-end gap-2 [&>div]:w-[80%]">
					<Input title="새로운 태그 등록" />
					<Button>
						<SVGIcon icon="plus" className="stroke-white" />
					</Button>
				</Input.Container>
				<Button className="mt-4 w-full" onClick={() => setCurrentStep('form')}>
					확인
				</Button>
			</div>
		</>
	);
}
