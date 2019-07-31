import React, { useState } from 'react';

export default function Counter(): JSX.Element {
  const [count, setCount] = useState(0);

  const countAddOne = (): void => {
    setCount(count + 1);
  };

  const countAddTwo = (): void => {
    setCount(count + 2);
  };

  return (
    <div>
      <div data-testid="display-count">
        點了 {count} 下
      </div>

      <button data-testid="count-add-one" onClick={countAddOne}>add 1</button>

      <button data-testid="count-add-two" onClick={countAddTwo}>add 2</button>
    </div>
  );
}
