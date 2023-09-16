import React from 'react';
import { render } from '@testing-library/react';
import Introduction from '../Introduction';

// 渲染 Introduction 组件测试
test('renders Introduction component', () => {
  render(<Introduction />);
});
