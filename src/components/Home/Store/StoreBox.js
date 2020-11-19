import React from 'react';
import { Card } from 'react-bootstrap';

const StoreBox = (store) => {
    return (
        <div className="col-md-3 col-sm-12 store_box">
            <Card className="store_card">
                <Card.Img className='img-fluid store_img' variant="top" src={store.store.img} />
                <Card.Body className='text-center'>
                    <Card.Title className='store_title'>{store.store.title}</Card.Title>
                    <Card.Text className='store_text'>
                        {store.store.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default StoreBox;