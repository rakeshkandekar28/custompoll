import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PollOption } from './PollOption';
import '@testing-library/jest-dom';

const mockOption = {
  id: "1",
  label: "Test Option",
  voteCount: 5
};

describe('PollOption Component', () => {
  test('renders option label', () => {
    render(
      <PollOption 
        option={mockOption}
        totalVotes={10}
        disableSelection={false}
        onClick={() => {}}
      />
    );
    expect(screen.getByText(mockOption.label)).toBeInTheDocument();
  });


  test('handles click event', () => {
    const mockOnClick = jest.fn();
    const option = {
      ...mockOption,
      isSelected: false
    };
  
    const { rerender } = render(
      <PollOption 
        option={option}
        totalVotes={10}
        disableSelection={false}
        onClick={mockOnClick}
      />
    );
  
    // Click the button when enabled
    const enabledButton = screen.getByRole('button');
    fireEvent.click(enabledButton);
  
    // Verify the onClick handler was called with the correct option id
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith(option.id);
  
    // Reset the mock before testing disabled state
    mockOnClick.mockClear();
  
    // Rerender with disabled state
    rerender(
      <PollOption 
        option={option}
        totalVotes={10}
        disableSelection={true}
        onClick={mockOnClick}
      />
    );
  
    // Get the new button reference after rerender
    const disabledButton = screen.getByRole('button');
    fireEvent.click(disabledButton);
    
    // Verify onClick wasn't called when disabled
    expect(mockOnClick).not.toHaveBeenCalled();
  });

});