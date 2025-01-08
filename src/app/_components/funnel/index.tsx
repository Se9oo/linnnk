import { Fragment, ReactElement, ReactNode, useEffect } from 'react';

import { useFunnelActions, useFunnelCurrentStep } from '@/stores/funnel';

interface StepProps<T extends string> {
	name: T;
	children: ReactNode;
}

interface FunnelProps<T extends string> {
	children: Array<ReactElement<StepProps<T>>>;
}

function Step<T extends string>({ name, children }: StepProps<T>) {
	return <Fragment key={name}>{children}</Fragment>;
}

function FunnelMain<T extends string>({ children }: FunnelProps<T>) {
	const currentFunnelStep = useFunnelCurrentStep();
	const { setCurrentStep, resetFunnelStore } = useFunnelActions();

	useEffect(() => {
		if (children && children.length > 0) {
			setCurrentStep(children[0].props.name);
		}

		return () => resetFunnelStore();
	}, []);

	return (
		<>
			{children.map((step) => {
				return (
					<div key={step.props.name} className={`h-full ${step.props.name === currentFunnelStep ? 'block' : 'hidden'}`}>
						{step}
					</div>
				);
			})}
		</>
	);
}

export const Funnel = Object.assign(FunnelMain, {
	Step,
});
