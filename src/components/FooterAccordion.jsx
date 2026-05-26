import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import { GoPlus, GoDash } from "react-icons/go";

export default function FooterAccordion({title, desc, expanded, onChange}) {
  const handleChange = (event, isExpanded) => {
    if (onChange) {
      onChange(event, isExpanded);
    }
  };

  return (
    <Box sx={{ backgroundColor: 'transparent' }}>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        disableGutters
        elevation={0}
        sx={{
          backgroundColor: '#1A1A1A', 
          border: '1px solid #262626', 
          borderRadius: '12px !important',
          margin: '0 0 16px 0 !important',
          '&:before': { display: 'none' }, 
          overflow: 'hidden'
        }}
      >
        <AccordionSummary
          expandIcon={
            <Box sx={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#111111',
              border: '1px solid #262626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F9EFEC'
            }}>
              {expanded ? <GoDash size={24} /> : <GoPlus size={24} />}
            </Box>
          }
          sx={{
            p: 3,
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
              transform: 'none',
            },
          }}
        >
          <Typography sx={{ 
            color: '#F9EFEC', 
            fontSize: '18px', 
            fontWeight: '500',
            fontFamily: "'Roboto Flex', sans-serif" 
          }}>
            {title}
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ px: 3, pb: 4, pt: 0 }}>
          <Typography sx={{ 
            color: '#81807E', 
            fontSize: '15px', 
            lineHeight: '1.6',
            maxWidth: '80%',
            fontFamily: "'Roboto Flex', sans-serif"
          }}>
            {desc}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}