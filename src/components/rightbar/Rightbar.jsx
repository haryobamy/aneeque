import React from 'react'
import { RightbarContainer, RightbarHeader, BellIcon, EditIcon, ButtonContainer, ImageContainer, TopIcons, Card, ShoppingIcon, CardItem, UserIcon, RecentCard, RecentItem, SeeAll, ReputitionItem } from './RightbarElement'
import userimg from '../../image/sidebar.jpg'
import phone from '../../image/phone.jpg'
import ProgressBar from "@ramonak/react-progress-bar";



const Rightbar = () => {
    return (
        <>
            <RightbarContainer>
                <RightbarHeader>
                    <TopIcons>
                        <ButtonContainer><BellIcon /></ButtonContainer>
                        <ButtonContainer><EditIcon /></ButtonContainer>
                    </TopIcons>


                    <ImageContainer>
                        <img src={userimg} alt="userImage" style={{ width: '130px', height: 130, borderRadius: '100%', objectFit: 'cover' }} />

                    </ImageContainer>
                    <h3>Konter Pulsa</h3>
                    <Card>
                        <CardItem>
                            <div style={{ backgroundColor: '#e2e8fd', width: 30, height: 30, textAlign: 'center', marginTop: 15, marginBottom: 10, borderRadius: 5 }} >
                                <ShoppingIcon />
                            </div>
                            <div>
                                <h4>218</h4>
                                <h>
                                    Products
                                </h>
                            </div>
                        </CardItem>

                        <CardItem>
                            <div style={{ backgroundColor: '#e2e8fd', width: 30, height: 30, textAlign: 'center', marginTop: 15, marginBottom: 10, borderRadius: 5 }} >
                                <UserIcon />
                            </div>

                            <div>
                                <h4>2.580</h4>
                                <h>
                                    Followers
                                </h>
                            </div>
                        </CardItem>
                    </Card>
                    {/* reputition section */}
                    <h2>Reputation</h2>
                    <Card>
                        <ReputitionItem>
                            <div style={{ backgroundColor: '#f9c2a3', width: 40, height: 40, textAlign: 'center', marginTop: 15, marginBottom: 10, borderRadius: 5 }} >
                                <UserIcon />
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: 220, margin: '20px 10px 0px 20px' }}>
                                    <h6>Star seller</h6>
                                    <i>85%</i>
                                </div>
                                <ProgressBar completed={85} bgColor='#fda06c' height='6px' width='220px' baseBgColor='#e2e8fd' isLabelVisible={false} labelColor='green' margin='0px 20px' />

                            </div>
                        </ReputitionItem>
                    </Card>
                    {/* recent order section */}
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h2 style={{ color: '#324372' }}>Recent Orders</h2>
                        <SeeAll to='/orders'>See All</SeeAll>
                    </div>

                    <RecentCard>

                        <RecentItem>
                            <div style={{ backgroundColor: '#e2e8fd', width: 50, height: 50, padding: '10px 0px 0px 10px', borderRadius: 10, margin: '1px -20px 0px 0px' }}>
                                <img src={phone} alt="" style={{ width: 30, height: 30, }} />
                            </div>

                            <div >
                                <h3>Redimi 4X</h3>
                                <p>2 Minute Ago</p>
                            </div>
                            <i>+$80.00</i>
                        </RecentItem>
                        <RecentItem>
                            <div style={{ backgroundColor: '#e2e8fd', width: 50, height: 50, padding: '10px 0px 0px 10px', borderRadius: 10, margin: '1px -20px 0px 0px' }}>
                                <img src={phone} alt="" style={{ width: 30, height: 30, }} />
                            </div>
                            <div>
                                <h3>Acer E1-421</h3>
                                <p>2 Minute Ago</p>
                            </div>
                            <i>+$80.00</i>
                        </RecentItem>
                        <RecentItem>
                            <div style={{ backgroundColor: '#e2e8fd', width: 50, height: 50, padding: '10px 0px 0px 10px', borderRadius: 10, margin: '1px -20px 0px 0px' }}>
                                <img src={phone} alt="" style={{ width: 30, height: 30, }} />
                            </div>
                            <div>
                                <h3>Nikon D3500</h3>
                                <p>2 Minute Ago</p>
                            </div>
                            <i>+$80.00</i>
                        </RecentItem>
                    </RecentCard>
                </RightbarHeader>
            </RightbarContainer >

        </>
    )
}

export default Rightbar;


{/* <hr style={{
                            color: '1px solid red',
                            width: ' 10%',
                            height: '2px',
                            rotate: '90deg'
                        }} /> */}