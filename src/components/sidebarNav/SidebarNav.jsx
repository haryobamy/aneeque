import React from "react";
import { SidebarContainer, NavIcon, SidebarWrap, SideBarNav, Bars, Close, Footer, Navheader, SideBarNavMini, SidebarWrapperMini } from "./SidebarNavElements";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData, SidebarData1 } from "./sidebarData";
import Submenu from "./Submenu";
import logo from '../../image/logo.PNG'


const SidebarNav = () => {
    const [sidebar, setSidebar] = React.useState(true)
    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <>
            <SidebarContainer>
                <SideBarNavMini>
                    <SidebarWrapperMini>
                        <NavIcon to='#'>
                            <Bars onClick={showSidebar} />
                        </NavIcon>
                        {/* <h5 style={{ margin: '10px 0px 10px 0px', color: '#3c4d78' }}>Menu</h5>
                        {SidebarData.map((item, index) => {
                            return <Submenu item={item} key={index} />
                        })}
                        <h5 style={{ margin: '20px 0px 10px 0px', color: '#3c4d78', fontWeight: 'bold' }}>Business</h5>
                        {SidebarData1.map((item, index) => {

                            return <Submenu item={item} key={index} />
                        })} */}
                    </SidebarWrapperMini>
                </SideBarNavMini>


                <SideBarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to='#'>
                            <Close onClick={showSidebar} />
                        </NavIcon>
                        <Navheader>
                            <div style={{ backgroundColor: ' #347ae2', width: 50, height: 50, borderRadius: '100%' }}>
                                <img src={logo} alt="" />
                            </div>

                            <h1>Tumbas</h1>
                        </Navheader>
                        <h5 style={{ margin: '10px 0px 10px 0px', color: '#3c4d78' }}>Menu</h5>
                        {SidebarData.map((item, index) => {
                            return <Submenu item={item} key={index} />
                        })}
                        <h5 style={{ margin: '20px 0px 10px 0px', color: '#3c4d78', fontWeight: 'bold' }}>Business</h5>
                        {SidebarData1.map((item, index) => {

                            return <Submenu item={item} key={index} />
                        })}

                        <Footer>
                            <h6>© Tumbas. 2020</h6>
                            <p>Platform for solutions of all types of business to be more advanced.</p>
                        </Footer>
                    </SidebarWrap>


                </SideBarNav>


            </SidebarContainer>

        </>
    );
};

export default SidebarNav;
