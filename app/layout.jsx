import "./globals.css";

export const metadata = {
  title: "Sift Systemics",
  description: "Fatal physics intelligence for safety teams."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
