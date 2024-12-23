import type { Meta, StoryObj } from '@storybook/react';

import AuthSession from '@/app/_components/auth/auth-session';
import BeforeLoginHeader from '@/app/_components/header/before-login-header';

const meta = {
	title: 'Components/Header/BeforeLoginHeader',
	component: BeforeLoginHeader,
	tags: ['autodocs'],
} satisfies Meta<typeof BeforeLoginHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: () => (
		<AuthSession>
			<BeforeLoginHeader />
		</AuthSession>
	),
};
