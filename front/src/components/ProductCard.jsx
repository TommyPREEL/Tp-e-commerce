import * as React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

function ProductCard({props}) {
  return (
    <Card title={props.name} subTitle={props.description} style={{ maxWidth: '345px'}}>
      <img src={props.img} alt={props.description} style={{ objectFit: 'cover', height: '200px' }} />
      <div className="p-card-footer">
        <Button label="Buy" />
      </div>
    </Card>
  );
}
export default ProductCard;