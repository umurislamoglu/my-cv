import React from 'react'
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Header from '../layout/Header';
import About from "../layout/About"
import Portfolio from "../layout/Portfolio"
import Comments from "../layout/Comments"
import Contact from "../layout/Contact"

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Header/>

        <div className="">

            <Switch>
                <Route exact path="/" component={About}></Route>
                <Route  path="/portfolio" component={Portfolio}></Route>
                <Route  path="/comments" component={Comments}></Route>
                <Route  path="/contact" component={Contact}></Route>
            </Switch>
        </div>
       
        </BrowserRouter>
    )
}

export default AppRouter
