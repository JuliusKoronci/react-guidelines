import { mount } from 'enzyme';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../theme/theme';
import MainLayout from '../MainLayout';

const Layout = mount(
  <ThemeProvider theme={theme}>
    <MainLayout
      content={<p>content</p>}
      header={<p>header</p>}
      footer={<p>footer</p>}
    />
  </ThemeProvider>,
);

describe('MainLayout', () => {
  it('should render correct layout', function() {
    expect(Layout.length).toEqual(1);
  });
  it('should render children', function() {
    expect(Layout.find('header').length).toEqual(1);
    expect(Layout.find('section').length).toEqual(1);
    expect(Layout.find('footer').length).toEqual(1);
  });
  it('should render children contents', function() {
    expect(Layout.find('header').text()).toEqual('header');
    expect(Layout.find('section').text()).toEqual('content');
    expect(Layout.find('footer').text()).toEqual('footer');
  });
});
