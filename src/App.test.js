import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Site } from './App';
import { articles, projects } from './data/demo';
beforeEach(() => {
  window.scrollTo = jest.fn();
});
function renderRoute(path) {
  return render(<MemoryRouter initialEntries={[path]}><Site /></MemoryRouter>);
}
test('loads the homepage without an API request', () => {
  const originalFetch = global.fetch;
  const mockFetch = jest.fn(() => Promise.reject(new Error('Network disabled')));
  global.fetch = mockFetch;
  try {
    renderRoute('/');
    expect(screen.getByRole('heading', {
      level: 1
    }).textContent).toMatch(/Good ideas/);
    expect(screen.getByRole('link', {
      name: 'View Forma project'
    })).toBeTruthy();
    expect(mockFetch).not.toHaveBeenCalled();
  } finally {
    global.fetch = originalFetch;
  }
});
test('filters work and opens a project', () => {
  renderRoute('/work');
  expect(screen.getAllByRole('link', {
    name: /^View .* project$/
  })).toHaveLength(6);
  fireEvent.click(screen.getByRole('button', {
    name: 'Campaign'
  }));
  expect(screen.getAllByRole('link', {
    name: /^View .* project$/
  })).toHaveLength(2);
  fireEvent.click(screen.getByRole('link', {
    name: 'View good day project'
  }));
  expect(screen.getByRole('heading', {
    level: 1
  }).textContent).toBe(projects[1].title);
});
test.each(projects.map(project => [project.slug, project.title]))('opens /work/%s directly', (slug, title) => {
  renderRoute(`/work/${slug}`);
  expect(screen.getByRole('heading', {
    level: 1
  }).textContent).toBe(title);
});
test.each(articles.map(article => [article.slug, article.title]))('opens /journal/%s directly', (slug, title) => {
  renderRoute(`/journal/${slug}`);
  expect(screen.getByRole('heading', {
    level: 1
  }).textContent).toBe(title);
});
test.each(['/missing', '/work/missing', '/journal/missing'])('shows a usable 404 for %s', path => {
  renderRoute(path);
  expect(screen.getByRole('heading', {
    level: 1
  }).textContent).toMatch(/Nothing here/);
  expect(screen.getByRole('link', {
    name: /Back to the studio/
  })).toBeTruthy();
});
test('the contact form only previews a submission', () => {
  renderRoute('/contact');
  fireEvent.change(screen.getByLabelText('Your name'), {
    target: {
      value: 'Demo Visitor'
    }
  });
  fireEvent.change(screen.getByLabelText('Email address'), {
    target: {
      value: 'visitor@example.com'
    }
  });
  fireEvent.change(screen.getByLabelText('What are you working on?'), {
    target: {
      value: 'A new website'
    }
  });
  fireEvent.submit(screen.getByRole('form', {
    name: 'Demo contact'
  }));
  expect(screen.getByRole('status').textContent).toMatch(/has not been sent or saved/);
  fireEvent.change(screen.getByLabelText('Your name'), {
    target: {
      value: 'Another Visitor'
    }
  });
  expect(screen.queryByRole('status')).toBeNull();
});
test('navigation closes after selecting a destination', () => {
  renderRoute('/');
  const toggle = screen.getByRole('button', {
    name: 'Toggle navigation'
  });
  fireEvent.click(toggle);
  expect(toggle.getAttribute('aria-expanded')).toBe('true');
  fireEvent.click(screen.getByRole('link', {
    name: 'Services'
  }));
  expect(toggle.getAttribute('aria-expanded')).toBe('false');
  expect(screen.getByRole('heading', {
    level: 1
  }).textContent).toBe('From first thought to final detail.');
});
