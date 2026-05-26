import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { LuDraftingCompass, LuStar, LuShield, LuTimer } from 'react-icons/lu'

const cards = [
  {
    id: 1,
    title: "projects.section2.card1.title",
    desc: "projects.section2.card1.desc",
    icon: <LuDraftingCompass color='#CE7D63' size={24} />
  },
  {
    id: 2,
    title: "projects.section2.card2.title",
    desc: "projects.section2.card2.desc",
    icon: <LuStar color='#CE7D63' size={24} />
  },
  {
    id: 3,
    title: "projects.section2.card3.title",
    desc: "projects.section2.card3.desc",
    icon: <LuShield color='#CE7D63' size={24} />
  },
  {
    id: 4,
    title: "projects.section2.card4.title",
    desc: "projects.section2.card4.desc",
    icon: <LuTimer color='#CE7D63' size={24} />
  }
]

export default function Section2Proj() {
  const { t } = useTranslation()

  return (
    <section className='w-[90%] m-auto border-2 border-[#1F1F1F] p-2.5 rounded-2xl mb-24'>
      <Box sx={{
        backgroundColor: '#1A1A1A',
        padding: { xs: '20px', lg: '30px' },
        borderRadius: '12px',
        border: '1px solid #1F1F1F',
        marginBottom: '16px'
      }}>
        <Typography sx={{
          color: '#F9EFEC',
          fontWeight: '600',
          fontSize: { xs: '20px', md: '26px', lg: '30px' },
        }}>
          {t("projects.section2.title")}
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
            padding: { xs: '24px 20px', lg: '30px 24px' },
            width: { 
              xs: '100%', 
              lg: '24%'
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <Box sx={{
              backgroundColor: '#1F1F1F',
              border: '1px solid #333333',
              padding: '14px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '52px',
              height: '52px',
              marginBottom: '24px'
            }}>
              {card.icon}
            </Box>

            <Typography sx={{
              color: '#F9EFEC',
              fontWeight: '600',
              fontSize: { xs: '15px', lg: '17px' },
              marginBottom: '14px',
            }}>
              {t(card.title)}
            </Typography>

            <Typography sx={{
              color: '#B3B3B2',
              fontSize: { xs: '13px', lg: '14px' },
            }}>
              {t(card.desc)}
            </Typography>
          </Box>
        ))}
      </Box>
    </section>
  )
}
