
import "./globals.css";
import { Balance } from "@/components/balance/balance";
import { History } from "@/components/transactionhistory/transactionhistory";
// import { Newtransaction } from "@/components/newtransection/newtransaction";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" /></head>
      <body style={{backgroundColor:"#f7f7f7"}} className="d-flex justify-content-center align-items-center flex-column full-height">
        {children}
        <Balance></Balance>
        {/* <History></History> */}
        
      {/* <Newtransaction onAddTransaction={handleTransaction} /> */}
        {/* <Newtransaction></Newtransaction> */}
      </body>
    </html>
  );
}
