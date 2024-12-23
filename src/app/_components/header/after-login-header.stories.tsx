import type { Meta, StoryObj } from '@storybook/react';
import { Session } from 'next-auth';
import { SessionContext } from 'next-auth/react';

import AfterLoginHeader from '@/app/_components/header/after-login-header';

const mockUser: Session = {
	user: {
		id: '',
		email: '',
		image: '',
	},
	expires: '',
};

const meta = {
	title: 'Components/Header/AfterLoginHeader',
	component: AfterLoginHeader,
	tags: ['autodocs'],
} satisfies Meta<typeof AfterLoginHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: () => (
		<SessionContext.Provider value={{ status: 'authenticated', data: mockUser, update: async () => null }}>
			<AfterLoginHeader />
		</SessionContext.Provider>
	),
};
