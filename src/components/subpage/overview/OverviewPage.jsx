import React from 'react'
import {
    Card,
    CardTop,
    OverviewWrapper,
    Search, Searchicon,
    Cardicon1, Cardicon2,
    Cardicon3, Cardicon4, CardSection,
    CardHead, ProductsTable,
    ProductsPhotos, ProductsName, ProductsDate,
    ProductsBrand, ProductsPrice, ProductsCategory,
    ProductsStatus, TableTitle, Products
} from './OverviewPageElement'
import Income from './Income'

const OverviewPage = () => {
    return (
        <>
            <OverviewWrapper>
                <Search>
                    <Searchicon />
                    <input type="text" placeholder='Search for Products' />
                </Search>
                <CardHead><p>Overview</p> </CardHead>

                <CardSection>

                    <Card>

                        <CardTop>
                            <Cardicon1 />
                            <p style={{ color: '#4ca787' }}>+24%</p>
                        </CardTop>
                        <h6>$27,340.00</h6>
                        <i>Total Sales</i>
                    </Card>
                    <Card>
                        <CardTop>
                            <Cardicon2 />
                            <p style={{ color: '#f26681' }}>-32%</p>
                        </CardTop>
                        <h6>$27,340.00</h6>
                        <i>Total Expenses</i>
                    </Card>
                    <Card>
                        <CardTop>
                            <Cardicon3 />
                            <p style={{ color: '#4ca787' }}>+48%</p>
                        </CardTop>
                        <h6>$18,260.00</h6>
                        <i>Total Vistors</i>
                    </Card>
                    <Card>
                        <CardTop>
                            <Cardicon4 />
                            <p style={{ color: '#f26681' }}>-12%</p>
                        </CardTop>
                        <h6>$11,340.00</h6>
                        <i>Total Orders</i>

                    </Card>
                </CardSection>

                <Income />
                {/* popular product section  */}
                <ProductsTable>
                    <p className=" px-1">Popular Products</p>
                    <TableTitle className=" px-3" >
                        <ProductsPhotos>Photos</ProductsPhotos>
                        <ProductsName>Name</ProductsName>
                        <ProductsDate>Date</ProductsDate>
                        <ProductsCategory>Category</ProductsCategory>
                        <ProductsBrand>Brand</ProductsBrand>
                        <ProductsPrice>Price</ProductsPrice>
                        <ProductsStatus>Status</ProductsStatus>



                    </TableTitle>
                    <Products className='px-3 pt-4'>
                        <ProductsPhotos>Photos</ProductsPhotos>
                        <ProductsName><h6>Cowboy Hats</h6> <h>#2807856840</h></ProductsName>
                        <ProductsDate> <h6>Aug 12, 2020</h6></ProductsDate>
                        <ProductsCategory><h6>Fashion</h6></ProductsCategory>
                        <ProductsBrand><h6>Swallow </h6></ProductsBrand>
                        <ProductsPrice> <h6>$99.89</h6></ProductsPrice>
                        <ProductsStatus><h6>Available</h6> <h>18k Viewers</h></ProductsStatus>
                    </Products>
                    <Products className='px-3 pt-4'>
                        <ProductsPhotos>Photos</ProductsPhotos>
                        <ProductsName><h6>Cowboy Hats</h6> <h>#2807856840</h></ProductsName>
                        <ProductsDate> <h6>Aug 12, 2020</h6></ProductsDate>
                        <ProductsCategory><h6>Fashion</h6></ProductsCategory>
                        <ProductsBrand><h6>Swallow </h6></ProductsBrand>
                        <ProductsPrice> <h6>$99.89</h6></ProductsPrice>
                        <ProductsStatus><h6>Available</h6> <h>18k Viewers</h></ProductsStatus>
                    </Products>

                </ProductsTable>


            </OverviewWrapper>
        </>
    )
}

export default OverviewPage
