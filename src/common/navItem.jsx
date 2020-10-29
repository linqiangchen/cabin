import React from 'react'
import {withRouter ,NavLink} from 'react-router-dom'
 function navItem(props ) {   
const { route,location } =props
    return (
        <div className="routeItem">
            <NavLink to={route.path}>  <img src={location.pathname === route.path? route.selectedIcon:route.icon} alt=""/>
            <span>{route.name}</span>
             </NavLink>
        </div>
    )
}
export default withRouter(navItem)