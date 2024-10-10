import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, it, vi } from 'vitest'
import { Button } from '.'

describe('Button test:', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(<Button>Testing</Button>)
  })

  it('should render label', () => {
    render(<Button>Testing</Button>)
    screen.getByText('Testing')
  })

  it('should be disabled', () => {
    render(<Button disabled>Testing</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('onClick triggers properly', async () => {
    const mockFn = vi.fn()

    render(<Button onClick={mockFn}>Testing</Button>)

    expect(mockFn).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByRole('button'))

    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('disabled prevents action', async () => {
    const mockFn = vi.fn()

    render(
      <Button
        onClick={mockFn}
        disabled
      >
        Testing
      </Button>
    )

    expect(mockFn).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByRole('button'))

    expect(mockFn).toHaveBeenCalledTimes(0)
  })

  // https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/src/components/Spinner.test.tsx

  // https://testing-library.com/docs/react-testing-library/example-intro
})
