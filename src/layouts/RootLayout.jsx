import {Outlet} from "react-router-dom"


export default function RootLayout (){
    return(
        <div className="rootLayout">
           
           <header>
            <h1></h1>
           </header>

            <main className="main">
                <Outlet/>
            </main>
        
        </div>
    )
}