import { FormProvider, useForm } from 'react-hook-form';

import { Funnel } from '@/app/_components/funnel';
import AddSingleLinkForm from '@/app/_feature/link/components/add-single-link-form';
import TagSelector from '@/app/_feature/link/components/tag-selector';

const tags = [
	{
		id: 'tag1',
		tagName: 'tag1',
	},
	{
		id: 'tag2',
		tagName: 'tag2',
	},
	{
		id: 'tag3',
		tagName: 'tag3',
	},
	{
		id: 'tag4',
		tagName: 'tag4',
	},
	{
		id: 'tag5',
		tagName: 'tag5',
	},
];

const linkList = [
	{
		id: 'linkList1',
		title: '개발',
	},
	{
		id: 'linkList2',
		title: '레시피',
	},
	{
		id: 'linkList3',
		title: '취미',
	},
];

export default function AddSingleLink() {
	const methods = useForm<AddSingleLinkFormType>({
		defaultValues: {
			tags,
			linkList,
		},
	});

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
