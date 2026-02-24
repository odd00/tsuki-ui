import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps, ButtonSize, ButtonType } from '../index';

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'klass',
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const { getByText } = render(<Button {...defaultProps}>Nice</Button>);
    const element = getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('tsuki-btn tsuki-btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('should render the correct component based on different props', () => {
    const { getByText } = render(<Button {...testProps}>Nice</Button>);
    const element = getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('tsuki-btn-primary tsuki-btn-lg klass');
  });

  it('should render a link when btnType equals link and href is provided', () => {
    const { getByText } = render(
      <Button btnType={ButtonType.Link} href="http://dummyurl">
        Link
      </Button>,
    );
    const element = getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('tsuki-btn tsuki-btn-link');
  });

  it('should render disabled button when disabled set to true', () => {
    const { getByText } = render(<Button {...disabledProps}>Nice</Button>);
    const element = getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
