import { FormProvider, useForm } from 'react-hook-form';

import { Funnel } from '@/app/_components/funnel';
import AddSingleLinkForm from '@/app/_feature/link/components/add-single-link-form';
import TagSelector from '@/app/_feature/tag/components/tag-selector';

export default function AddSingleLink() {
	const methods = useForm();

	return (
		<FormProvider {...methods}>
			<Funnel<'form' | 'tag-selector'>>
				<Funnel.Step name="form">
					<AddSingleLinkForm />
				</Funnel.Step>
				<Funnel.Step name="tag-selector">
					<TagSelector />
				</Funnel.Step>
			</Funnel>
		</FormProvider>
	);
}
