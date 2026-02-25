import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { faCoffee, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Icon, { ThemeType } from '../';

describe('<Icon />', () => {
  test('should render default icon', () => {
    const { container } = render(<Icon icon={faCoffee} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('.tsuki-icon')).toBeInTheDocument();
  });

  test('should render icon with theme', () => {
    const { container } = render(<Icon icon={faCheck} theme={ThemeType.Primary} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('tsuki-icon-primary');
  });

  test('should render icon with custom className', () => {
    const { container } = render(<Icon icon={faCoffee} className="custom-cls" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('tsuki-icon');
    expect(svg).toHaveClass('custom-cls');
  });

  test('should render icon with different sizes', () => {
    const { container } = render(<Icon icon={faCoffee} size="2x" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('fa-2x');
  });

  test('should render spinning icon', () => {
    const { container } = render(<Icon icon={faSpinner} spin />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('fa-spin');
  });

  test('should support all theme types', () => {
    const themes = [
      ThemeType.Primary,
      ThemeType.Success,
      ThemeType.Warning,
      ThemeType.Danger,
      ThemeType.Info,
    ];
    const { container } = render(
      <>
        {themes.map((theme) => (
          <Icon icon={faCoffee} theme={theme} key={theme} data-testid={theme} />
        ))}
      </>,
    );

    themes.forEach((theme) => {
      const icons = container.querySelectorAll(`.tsuki-icon-${theme}`);
      expect(icons.length).toBe(1);
    });
  });
});
