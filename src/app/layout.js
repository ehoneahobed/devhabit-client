// import { Inter } from 'next/font/google'
// import './globals.css'
// import Header from './components/Header'
// import Sidebar from './components/Sidebar'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'DevHabit',
//   description: 'Achieve your dev goals with ease',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header/>
//         <Sidebar/>
//         {children}

//         </body>
//     </html>
//   )
// }

// import { useContext } from 'react';
// import { UserContext } from '../contexts/UserContext'; // This is an example; adjust the import to your context
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { AuthContextProvider } from "./Context/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevHabit",
  description: "Achieve your dev goals with ease",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Header />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
