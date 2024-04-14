import React,{Fragment} from "react";
import RecentEvents from "./recentEvents";
import { Discount } from "./Discount";
import { EventsHome } from "./EventsHome";
import { HomeStats } from "./HomeStats";
import { OrganiseHome } from "./OrganiseHome";
import { Footer } from "./Footer";
import { Works } from "./Works";

function restHero(){
    return(
        <Fragment>
            <RecentEvents/>
            <Discount/>
            <EventsHome/>
            <HomeStats/>
            <OrganiseHome/>
            <Works/>
            <Footer/>
        </Fragment>
    )
}

export default restHero;