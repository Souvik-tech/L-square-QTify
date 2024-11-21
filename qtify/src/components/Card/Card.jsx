import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import cardImage from '../../assets/cardImg.png';
import Chip from '@mui/material/Chip';
import style from '../Card/Card.css';
import { useEffect,useState } from 'react';
import Section from '../Section/Section';
import axios from 'axios';

export default function ActionAreaCard() {
    const [cardData, setCardData] = useState([]);
    const [topCard,setTopCard] = useState([]);

    // Function to fetch data
    const loadCardData = async () => {
      try {
        const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
        setCardData(res.data); // Access the `.data` field to get the actual response body
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    const loadTopCarddata = async () => {
        try {
          const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/new`);
          setTopCard(res.data); // Access the `.data` field to get the actual response body
        } catch (error) {
          console.error('Error fetching card data:', error);
        }
      };
  
  
    // Fetch data only once when the component mounts
    useEffect(() => {
      loadCardData();
      loadTopCarddata();
    }, []);

  return (
    <>
<Section title="Top Albums" button="Collapse"/>
<div className='cardWrap'>

{cardData.map((val) => (
        <Card sx={{ maxWidth: 159 }} className="card" key={val.id}>
          <CardActionArea>
            <div className="top-card">
              <CardMedia
                className="card-image"
                component="img"
                height="140"
                image={val.image}
                alt={val.title}
              />
              <Chip label={`${val.follows} follows`} className="card-chip" />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="card-heading">
                {val.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      
</div>
<Section title="New Albums" button="Show All"/>
<div className='cardWrap'>

{topCard.map((val) => (
        <Card sx={{ maxWidth: 159 }} className="card" key={val.id}>
          <CardActionArea>
            <div className="top-card">
              <CardMedia
                className="card-image"
                component="img"
                height="140"
                image={val.image}
                alt={val.title}
              />
              <Chip label={`${val.follows} follows`} className="card-chip" />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="card-heading">
                {val.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      
</div>
    </>
  );
}
