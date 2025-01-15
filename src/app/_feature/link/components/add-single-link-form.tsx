import { useFormContext } from 'react-hook-form';

import Button from '@/app/_components/button';
import { Input } from '@/app/_components/input';
import LinkList from '@/app/_feature/link/components/link-list';
import SelectedTagList from '@/app/_feature/link/components/selected-tag-list';

import { useFunnelActions } from '@/stores/funnel';

export default function AddSingleLinkForm() {
	const { handleSubmit } = useFormContext();

	const { setCurrentStep } = useFunnelActions();

	const handleAddSingleLinkForm = (data: any) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(handleAddSingleLinkForm)}>
			<Input id="url" title="URL" />
			<div className="mt-6 flex items-center justify-between">
				<span className="text-lg">태그</span>
				<Button size="sm" theme="outline" onClick={() => setCurrentStep('tag-selector')}>
					태그 추가
				</Button>
			</div>
			<SelectedTagList />
			<LinkList />
			<div className="absolute bottom-4 left-[50%] w-full translate-x-[-50%] px-6">
				<Button type="submit" className="w-full">
					추가
				</Button>
			</div>
		</form>
	);
}
