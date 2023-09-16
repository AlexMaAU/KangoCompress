import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropZone from '../DropZone';

// 组件渲染测试
test('render DropZone without errors', () => {
  render(<DropZone />);
});

// 交互测试：模拟用户交互行为，如拖放文件，触发事件，然后断言组件是否响应正确
test('handle drag and drop interaction', () => {
  render(<DropZone />);
  const dropzoneText = screen.getByText(/Drag and drop images here/); // 使用正则表达式匹配包含 'Drag and drop images here' 的文本
  fireEvent.dragEnter(dropzoneText); // 触发拖拽进入事件
  expect(dropzoneText).toBeInTheDocument(); // 断言 'Drag and drop images here' 文本是否存在
});
