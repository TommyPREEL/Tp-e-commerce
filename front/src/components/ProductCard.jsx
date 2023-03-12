import * as React from 'react';
// import { Card,CardActionArea, Grid, Typography, CardMedia, CardContent} from '@mui/material';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

// function ProductCard({props}) {
//   return (
//       <Card sx={{ maxWidth: 345}}>
//         <CardActionArea>
//           <CardMedia
          
//             component="img"
//             image={props.img}
//             alt={props.description}   
//           />
//           <CardContent >
//             <Typography gutterBottom variant="h5" component="div">
//               {props.name}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {props.description}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//   );
// }

function ProductCard({props}) {
  return (
    <Card title={props.name} subTitle={props.description} style={{ maxWidth: '345px'}}>
      <img src={props.img} alt={props.description} style={{ objectFit: 'cover', height: '200px' }} />
      <div className="p-card-footer">
        <Button label="Acheter" />
      </div>
    </Card>
  );
}
export default ProductCard;