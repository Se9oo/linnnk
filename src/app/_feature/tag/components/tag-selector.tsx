import Button from '@/app/_components/button';
import Checkbox from '@/app/_components/input/checkbox';

import { useFunnelActions } from '@/stores/funnel';

export default function TagSelector() {
	const { setCurrentStep } = useFunnelActions();

	const tags = [
		{
			id: 'tag1',
			name: 'tag1',
		},
		{
			id: 'tag2',
			name: 'tag2',
		},
		{
			id: 'tag3',
			name: 'tag3',
		},
		{
			id: 'tag4',
			name: 'tag4',
		},
		{
			id: 'tag5',
			name: 'tag5',
		},
	];

	return (
		<>
			<ul className="flex h-[calc(100%-48px-48px-200px)] flex-col gap-4 overflow-y-auto">
				{tags.map((tag) => (
					<li key={tag.id}>
						<Checkbox id={tag.id} name={tag.name} />
					</li>
				))}
			</ul>
			<div className="absolute bottom-4 left-[50%] flex w-full translate-x-[-50%] gap-2 px-6">
				<Button className="w-full" onClick={() => setCurrentStep('form')}>
					확인
				</Button>
			</div>
		</>
	);
}
