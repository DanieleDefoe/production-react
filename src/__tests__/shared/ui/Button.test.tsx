import { Button, ButtonTheme } from '@/shared/ui';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  test('render button', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('render button', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
