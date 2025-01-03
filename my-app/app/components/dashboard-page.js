'use client';

import Link from 'next/link';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          {/* <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/settings">Settings</Link></li> */}
        </ul>
      </nav>
    </div>
  );
}
