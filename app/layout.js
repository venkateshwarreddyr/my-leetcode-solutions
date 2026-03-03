import './globals.css';

export const metadata = {
  title: 'LeetCode Solutions Viewer',
  description: 'Search and browse local LeetCode solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
