import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

test('renders Header component', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  // 断言Header组件中的Logo是否存在
  const logoElement = screen.getByAltText('KangoCompress');
  expect(logoElement).toBeInTheDocument();

  // 断言Header组件中的Select元素是否存在
  const selectElement = screen.getByRole('combobox');
  expect(selectElement).toBeInTheDocument();

  // 模拟选择中文
  fireEvent.change(selectElement, { target: { value: 'chinese' } });
});
