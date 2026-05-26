import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaAward } from 'react-icons/fa'

let list = [
  {
    id: 1,
    key: 'card1'
  },
  {
    id: 2,
    key: 'card2'
  },
  {
    id: 3,
    key: 'card3'
  },
  {
    id: 4,
    key: 'card4'
  }
]

export default function Section4About() {
  const { t } = useTranslation()
  return (
    <section className='w-[90%] m-auto border-2 border-[#1F1F1F] p-5 rounded-3xl mt-14 mb-14'>
      <Stack direction={'row'} sx={{
        padding: '30px',
        backgroundColor: '#1A1A1A',
        borderRadius: '16px',
        justifyContent: "space-between"
      }}>
        <Typography sx={{
          fontSize: { xs: '20px', lg: '34px' },
          color: 'white',
          fontWeight: '500'
        }}>
          {t("about.section4.title")}
        </Typography>
      </Stack>

      
      <Stack spacing={2} sx={{
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20px'
      }}>
        {list.map((el) => {
          return (
            <Box key={el.id} sx={{
              borderRadius: '14px',
              border: '1px solid #262626',
              backgroundColor: '#1E1E1E',
              width: { xs: '100%', lg: '24.2%' },
              display: 'flex',
              flexDirection: 'column',
              padding: '24px'
            }}>
              <Stack direction="row" sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px'
              }}>
                <Box sx={{
                  border: '1px solid #262626',
                  borderRadius: '30px',
                  padding: '6px 14px',
                  backgroundColor: '#1A1A1A'
                }}>
                  <Typography sx={{
                    color: '#B3B3B2',
                    fontSize: '13px',
                    fontWeight: '300'
                  }}>
                    {t(`about.section4.${el.key}.dateText`)}
                  </Typography>
                </Box>

                <Box sx={{
                  border: '1px solid #262626',
                  borderRadius: '10px',
                  padding: '10px',
                  backgroundColor: '#1A1A1A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FaAward color='#CE7D63' size={20} />
                </Box>
              </Stack>

              <Typography sx={{
                color: '#F9EFEC',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '16px'
              }}>
                {t(`about.section4.${el.key}.title`)}
              </Typography>

              <Typography sx={{
                color: '#98989A',
                fontSize: '14px',
                fontWeight: '300',
              }}>
                {t(`about.section4.${el.key}.desc`)}
              </Typography>
            </Box>
          )
        })}
      </Stack>
    </section>
  )
}
