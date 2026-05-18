import { useMemo, useState } from 'react';
import './App.css';

const notifications = [
  {
    id: 1,category: 'Placement',
    title: 'Campus placement drive open for registration',
    description: 'Eligible students must register before Friday.',
    priority: 1,
  },
  {
    id: 2, category: 'Exam Results',
    title: 'Spring semester results published',
    description: 'Check your result on the student portal.',
    priority: 2,
  },
  {
    id: 3,category: 'Placement',
    title: 'Company interview schedule released',
    description: 'Shortlisted students will receive email invites.',
    priority: 3,
  },
  {
    id: 4,category: 'Exam Results',
    title: 'Re-evaluation application deadline',
    description: 'Submit requests within 7 days of result publication.',
    priority: 4,
  },
  {
    id: 5,category: 'Event',
    title: 'Tech fest workshop registrations',
    description: 'Join workshops on AI, web dev, and design.',
    priority: 5,
  },
  {
    id: 6, category: 'Placement',
    title: 'Resume building session for final year students',
    description: 'Learn how to write a strong placement resume.',
    priority: 6,
  },
  {
    id: 7,category: 'Exam Results',
    title: 'Grade correction notice',
    description: 'Contact academic office if your grade is missing.',
    priority: 7,
  },
  {
    id: 8,category: 'Notice',
    title: 'Library timing update',
    description: 'Weekend hours have been extended.',
    priority: 8,
  },
  {
    id: 9,category: 'Exam Results',
    title: 'Grade correction notice',
    description: 'Contact academic office if your grade is missing.',
    priority: 7,
  },
  {
    id: 10,category: 'Notice',
    title: 'Library timing update',
    description: 'Weekend hours have been extended.',
    priority: 8,
  },
  {
    id: 11,category: 'Placement',
    title: 'Campus placement drive open for registration',
    description: 'Eligible students must register before Friday.',
    priority: 1,
  },
  {
    id: 12, category: 'Exam Results',
    title: 'Spring semester results published',
    description: 'Check your result on the student portal.',
    priority: 2,
  },
  {
    id: 13,category: 'Placement',
    title: 'Company interview schedule released',
    description: 'Shortlisted students will receive email invites.',
    priority: 3,
  },
  {
    id: 14,category: 'Exam Results',
    title: 'Re-evaluation application deadline',
    description: 'Submit requests within 7 days of result publication.',
    priority: 4,
  },
  {
    id: 15,category: 'Event',
    title: 'Tech fest workshop registrations',
    description: 'Join workshops on AI, web dev, and design.',
    priority: 5,
  },
  {
    id: 16, category: 'Placement',
    title: 'Resume building session for final year students',
    description: 'Learn how to write a strong placement resume.',
    priority: 6,
  },
  {
    id: 17,category: 'Exam Results',
    title: 'Grade correction notice',
    description: 'Contact academic office if your grade is missing.',
    priority: 7,
  },
  {
    id: 18,category: 'Notice',
    title: 'Library timing update',
    description: 'Weekend hours have been extended.',
    priority: 8,
  },
];

function App() {
  const [limit, setLimit] = useState(10);

  const sortedNotifications = useMemo(
    () => [...notifications].sort((a, b) => a.priority - b.priority),
    []
  );

  const visibleNotifications = sortedNotifications.slice(0, Math.min(limit, notifications.length));

  return (
    <main class = "main">
        <h1>Campus Notification Application</h1>
        <p>
          Pick how many notifications to display. The list is prioritized by category words like
          <strong> Placement</strong> and <strong>Exam Results</strong>.
        </p>

        <div >
          <label >
            Show top<br></br>
            <input
              type="number"
              min="1"
              max={notifications.length}
              value={limit}
              onChange={(event) => setLimit(Number(event.target.value) || 1)}
            /><br></br>
            notifications
          </label>

          <div className="preset-buttons">
            {[5, 10, 15].map((value) => (
              <button
                key={value}
                type="button"
                //className={value === limit ? 'active' : ''}
                onClick={() => setLimit(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div >
          Showing {visibleNotifications.length} of {notifications.length} prioritized notifications.
        </div>
          {visibleNotifications.map((item) => (
            <li >
              <h2 class="category">{item.category}</h2>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </li>
          ))}
    </main>
  );
}

export default App;
