import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Autocomplete from "react-google-autocomplete";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import mongoose from 'mongoose';

export default function SolicitarRegionBtn() {

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#f58864',
            },
          },
        },
      },
    },
  });

  // 1. Create the state to store the user's selected region
  const [selectedRegion, setSelectedRegion] = React.useState(null);

  // 2. Create a Schema for the region

  const regionSchema = new mongoose.Schema({
    region: String,
    votes: Number,
  });


  // 3. Create a function to create a POST request every time the "selectedRegion" state changes. First check if the region is already in the database, if it is, increment the vote count, if it isn't, create a new region object with a vote count of 1
  const sendRegionData = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/enxilados', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB Connected');
      const Region = mongoose.model('Region', regionSchema);
      const region = await Region.findOne({ region: selectedRegion });
      if (region) {
        region.votes += 1;
        await region.save();
        console.log('Region already exists, incrementing vote count');
      } else {
        const newRegion = new Region({ region: selectedRegion, votes: 1 });
        await newRegion.save();
        console.log('Region added to database');
      }
    } catch (error) {
      console.error('MongoDB Connection Error:', error);
      process.exit(1); // Exit process with failure
    }
  }
  
  return (
    <div>
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: "#FC6736",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              style={{
                color: "#ffffff",
              }}
            />
          }
          aria-controls="panel3-content"
          id="panel3-header"
          style={{
            color: "#ffffff",
            fontFamily: "CircularMedium",
          }}
        >
          Solicitar enxilados en mi región
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Autocomplete
              apiKey={"AIzaSyD-jrpxtIxofbfgZB2onALLCKbgPDThzM0"}
              onPlaceSelected={(place) => {
                setSelectedRegion(place);
              }}
            />
          </div>
        </AccordionDetails>
        <ThemeProvider theme={theme}>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button onClick={sendRegionData}>Agree</Button>
          </AccordionActions>
        </ThemeProvider>
      </Accordion>
    </div>
  );
}

