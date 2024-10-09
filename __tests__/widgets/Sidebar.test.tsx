import { renderWithTranslation } from '@/shared/lib';
import { Sidebar } from '@/widgets/Sidebar';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Sidebar', () => {
  test('renders', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should collapse and expand', async () => {
    renderWithTranslation(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar-toggle');

    await userEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');

    await userEvent.click(toggleButton);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});
