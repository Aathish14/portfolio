import "./globals.css";

export const metadata = {
  title: "Aathish Rao — Portfolio",
  description:
    "Final-year B.E. Computer Science and Engineering student focused on AI/ML, backend development, and cloud technologies; interested in reliable, scalable software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
