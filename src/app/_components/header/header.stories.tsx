import type { Meta, StoryObj } from '@storybook/react';
import { Session } from 'next-auth';
import { SessionContext } from 'next-auth/react';

import AuthSession from '@/app/_components/auth/auth-session';
import Header from '@/app/_components/header';

const mockUser: Session = {
	user: {
		id: '',
		email: '',
	},
	expires: '',
};

const meta = {
	title: 'Components/Header',
	component: Header,
	tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: () => (
		<AuthSession>
			<Header />
		</AuthSession>
	),
};

export const SignInPageHeader: Story = {
	args: {},
	parameters: {
		nextjs: {
			navigation: {
				pathname: '/signin',
			},
		},
	},
	render: () => {
		return (
			<AuthSession>
				<Header />
			</AuthSession>
		);
	},
};

export const AfterSignInHeader: Story = {
	args: {},
	render: () => {
		return (
			<SessionContext.Provider value={{ status: 'authenticated', data: mockUser, update: async () => null }}>
				<Header />
			</SessionContext.Provider>
		);
	},
};
