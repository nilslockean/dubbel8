import { browser } from '$app/environment';
import { PUBLIC_POSTHOG_API_KEY, PUBLIC_POSTHOG_API_HOST } from '$env/static/public';
import { PosthogClient } from '$lib/utils/PosthogClient';

export const load = async () => {
	if (browser && PUBLIC_POSTHOG_API_KEY && PUBLIC_POSTHOG_API_HOST) {
		new PosthogClient(PUBLIC_POSTHOG_API_KEY, PUBLIC_POSTHOG_API_HOST);
	}
};
