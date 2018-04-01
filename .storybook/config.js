import { configure } from '@storybook/addon-viewport';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

function loadStories() {
    requireAll(require.context("../src", true, /.story\.tsx?$/));
}

configure(loadStories, module);