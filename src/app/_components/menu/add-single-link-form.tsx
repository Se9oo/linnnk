import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/app/_components/button';
import { Input } from '@/app/_components/input';

export default function AddSingleLinkForm() {
	const methods = useForm();

	const handleAddSingleLinkForm = (data: any) => {};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(handleAddSingleLinkForm)}>
				<Input id="url" title="URL" />
				<Button type="submit" className="mt-10 w-full">
					추가
				</Button>
			</form>
		</FormProvider>
	);
}
