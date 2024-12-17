import "@/styles/globals.css";
import { getServerSession } from "next-auth";
import { Poppins } from "next/font/google";
import authOptions from "./api/auth/[...nextauth]/options";
import NextAuthSession from "@/utils/NextAuthSession";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Task Management",
  description: "Description of task management sysytem.",
  icon: "./favicon.ico",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <NextAuthSession session={session}>
        <body className={`${poppins.variable} antialiased`}>{children}</body>
      </NextAuthSession>
    </html>
  );
}
