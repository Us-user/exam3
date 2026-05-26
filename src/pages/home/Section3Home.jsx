import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FiArrowUpRight } from "react-icons/fi"

const cards = [
  {
    id: 1,
    title: "home.section3.card1.title",
    desc: "home.section3.card1.desc",
  },
  {
    id: 2,
    title: "home.section3.card2.title",
    desc: "home.section3.card2.desc",
  },
  {
    id: 3,
    title: "home.section3.card3.title",
    desc: "home.section3.card3.desc",
  },
  {
    id: 4,
    title: "home.section3.card4.title",
    desc: "home.section3.card4.desc",
  }
]

export default function Section3Home() {
  const { t } = useTranslation()

  return (
    <section className='w-[90%] m-auto border-2 border-[#1F1F1F] p-2.5 rounded-2xl mb-24'>
      <Box sx={{
        backgroundColor: '#1A1A1A',
        padding: { xs: '24px 16px', lg: '40px' },
        borderRadius: '12px',
        textAlign: 'center',
        border: '1px solid #1F1F1F',
        marginBottom: '16px'
      }}>
        <Typography sx={{
          color: '#F9EFEC',
          fontWeight: '600',
          fontSize: { xs: '18px', md: '24px', lg: '30px' },
          textAlign:'start'
        }}>
          {t("home.section3.title")}
        </Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'space-between'
      }}>
        {cards.map((card) => (
          <Box key={card.id} sx={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #1F1F1F',
            borderRadius: '12px',
            padding: { xs: '24px 20px', lg: '32px 24px' },
            width: { 
              xs: '100%', 
              lg: '24%' 
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <Box>
              <Typography sx={{
                color: '#F9EFEC',
                fontWeight: '600',
                fontSize: { xs: '16px', lg: '18px' },
                marginBottom: '14px',
              }}>
                {t(card.title)}
              </Typography>
              <Typography sx={{
                color: '#B3B3B2',
                fontSize: { xs: '13px', lg: '14px' },
                lineHeight: 1.6,
                marginBottom: '32px'
              }}>
                {t(card.desc)}
              </Typography>
            </Box>

            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: 'auto',             
            }}>
              <Box className="arrow-box" sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                backgroundColor: '#141414',
                borderRadius: '50%',
                border: '1px solid #1F1F1F',
                transition: 'all 0.3s ease'
              }}>
                <FiArrowUpRight className="arrow-icon" size={20} color='#E7BEB1' style={{ transition: 'color 0.3s ease' }} />
              </Box>
              <Typography className="text-learn" sx={{ 
                color: '#B3B3B2', 
                fontSize: '14px', 
                fontWeight: '500',
              }}>
                {t("home.section3.learnMore")}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </section>
  )
}
