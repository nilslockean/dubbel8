import posthog from 'posthog-js';

export class PosthogClient {
	apiKey: string;
	apiHost: string;

	constructor(apiKey: string, apiHost: string) {
		this.apiKey = apiKey;
		this.apiHost = apiHost;

		this.init();
	}

	private init() {
		console.log('PosthogClient.init', this.apiKey, this.apiHost);
		posthog.init(this.apiKey, {
			api_host: this.apiHost,
			capture_pageview: false,
			capture_pageleave: false,
			person_profiles: 'always'
		});
	}

	public static capturePageView() {
		console.log('capturePageView', window.location.pathname);
		posthog.capture('$pageview');
	}

	public static capturePageLeave() {
		console.log('capturePageLeave', window.location.pathname);
		posthog.capture('$pageleave');
	}
}
