'use client';

import { ComponentProps } from 'react';
import { Callout } from 'fumadocs-ui/components/callout';

export function ClientCallout(props: ComponentProps<typeof Callout>) {
    return <Callout {...props} />;
}
