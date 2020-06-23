import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';

import theme from './theme';

import './reset.css';

addParameters({
  options: {
    theme,
  },
});

addDecorator(withInfo);
addDecorator(centered);

// Import all stories

const loadStories = () => {
	const req = require.context('../src', true, /\.story\.tsx?$/)
	req.keys().forEach((story) => req(story))
}

setOptions({
	name: {"name": "Livelo", "displayName": "Livelo"},
	goFullScreen: false,
	addonPanelInRight: false,
	showSearchBox: false,
	showAddonPanel: true,
	showStoriesPanel: true,
})

addDecorator(withKnobs({ escapeHTML: false }))

configure(loadStories, module)
