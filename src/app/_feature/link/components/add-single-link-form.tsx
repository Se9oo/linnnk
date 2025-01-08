import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/app/_components/button';
import { Input } from '@/app/_components/input';

export default function AddSingleLinkForm() {
	const methods = useForm();

	const handleAddSingleLinkForm = (data: any) => {};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(handleAddSingleLinkForm)} className="relative h-[calc(100%-48px)]">
				<Input id="url" title="URL" />
				<div className="mt-6 flex items-center justify-between">
					<span className="text-lg">태그</span>
					<Button size="sm" theme="outline">
						태그 추가
					</Button>
				</div>
				<Button type="submit" className="absolute bottom-0 w-full">
					추가
				</Button>
			</form>
		</FormProvider>
	);
}
