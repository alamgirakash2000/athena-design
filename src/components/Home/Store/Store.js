import React from 'react';
import StoreBox from './StoreBox';
import storeData from './StoreData';
const Store = () => {
    return (
        <section className='store'>
            <div className="container">
                <row className='d-flex justify-content-center'>
                    <div className="col-md-4 col-sm-12 text-center storeInfo">
                        <h1>What we do</h1>
                        <p>Our main focus is to make the User Experience very simple and easy. Simplicity is our Strength.</p>
                    </div>
                </row>
            </div>

            <div className="store-Section">
                <div className='container'>
                    <div className="row">
                        {
                            storeData.map(data =><StoreBox key={data.id} store={data}></StoreBox>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Store;