import React from 'react';
import './index.css';
import {createRoot} from 'react-dom/client';
import {describe, expect, test, vi} from 'vitest';

import App from '@/app';

const mockRootElement = document.createElement('div');
mockRootElement.id = 'root';
document.getElementById = vi.fn().mockReturnValue(mockRootElement);

describe('Root Entry Point (index.tsx)', () => {
  test('should render the App component without crashing', () => {
    expect(() => {
      createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      );
    }).not.toThrow();
  });
});
