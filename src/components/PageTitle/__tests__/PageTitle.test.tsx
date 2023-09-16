import React from 'react';
import { render } from '@testing-library/react';
import PageTitle from '../PageTitle';

// 渲染 PageTitle 组件测试
test('renders PageTitle component', () => {
  render(<PageTitle />);
});
