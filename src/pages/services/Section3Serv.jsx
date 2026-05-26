import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FiArrowUpRight } from 'react-icons/fi'
import { LuSmile, LuHeart } from 'react-icons/lu'

const list = [
  {
    id: 1,
    company: "services.section3.card1.company",
    icon: <LuSmile color='#CE7D63' size={28} />,
    industryVal: "services.section3.card1.industryVal",
    serviceVal: "services.section3.card1.serviceVal",
    solutionDesc: "services.section3.card1.solutionDesc"
  },
  {
    id: 2,
    company: "services.section3.card2.company",
    icon: <LuHeart color='#CE7D63' size={28} />,
    industryVal: "services.section3.card2.industryVal",
    serviceVal: "services.section3.card2.serviceVal",
    solutionDesc: "services.section3.card2.solutionDesc"
  }
]

export default function Section3Serv() {
  const { t } = useTranslation()

  return (
    <section className='w-[90%] m-auto mb-24'>
      <Stack direction={'row'} sx={{
        backgroundColor: '#1A1A1A',
        borderRadius: '14px',
        padding: '30px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        border: '1px solid #1F1F1F'
      }}>
        <Typography sx={{
          color: '#F9EFEC',
          fontSize: { xs: '24px', lg: '52px' },
          fontWeight: '500'
        }}>
          {t("services.section3.title")}
        </Typography>

        <Stack spacing={1} direction={'row'} sx={{
          alignItems: 'center',
          display: { xs: 'none', lg: 'flex' }
        }}>
          <Box sx={{
            padding: '16px',
            border: '1px solid #262626',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px'
          }}>
            <FiArrowUpRight size={24} color='#E7BEB1' />
          </Box>
          <Typography sx={{
            color: '#B3B3B2',
            fontWeight: '500'
          }}>
            {t("services.section3.viewAll")}
          </Typography>
        </Stack>
      </Stack>

      <Stack direction='column' spacing={3}>
        {list.map((el) => {
          return (
            <Stack key={el.id} direction={{ xs: 'column', lg: 'row' }} spacing={4} sx={{
              border: '2px solid #1F1F1F',
              borderRadius: '20px',
              padding: { xs: '20px', lg: '40px' },
              marginBottom: '24px',
              backgroundColor: 'transparent'
            }}>
              <Box sx={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #1F1F1F',
                borderRadius: '16px',
                padding: { xs: '24px 20px', lg: '30px' },
                width: { xs: '100%', lg: '45%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ 
                  justifyContent: 'space-between', 
                  alignItems: { xs: 'flex-start', lg: 'center' }, 
                  gap: 2, 
                  marginBottom: '24px' 
                }}>
                  <Stack direction='row' spacing={2} alignItems='center' sx={{
                    alignItems:'center'
                  }}>
                    <Box sx={{
                      backgroundColor: '#1F1F1F',
                      border: '1px solid #333333',
                      padding: '14px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {el.icon}
                    </Box>
                    <Typography variant='h6' sx={{ color: '#F9EFEC', fontWeight: '600' }}>
                      {t(el.company)}
                    </Typography>
                  </Stack>
                  
                  <Stack direction='row' spacing={1} alignItems='center' sx={{ 
                    color: '#B3B3B2',
                    alignItems:'center'
                  }}>
                    <Box sx={{
                      padding: '10px',
                      backgroundColor: '#1F1F1F',
                      border: '1px solid #333333',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px'
                    }}><FiArrowUpRight size={18} color='#E7BEB1' /></Box>
                    <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
                      {t("services.section3.visitWebsite")}
                    </Typography>
                  </Stack>
                </Stack>

                <Stack direction={{ xs: 'column', lg: 'row' }} spacing={1.5} sx={{ width: '100%' }}>
                  <Box sx={{
                    padding: '10px 16px',
                    backgroundColor: '#1F1F1F',
                    border: '1px solid #262626',
                    borderRadius: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    gap: '10px',
                    marginBottom: { xs: '10px', lg: '0' }
                  }}>
                    <Typography sx={{ color: '#B3B3B2', fontSize: '13px' }}>
                      {t("services.section3.industry")}
                    </Typography>
                    <Box sx={{ width: '4px', height: '4px', backgroundColor: '#CE7D63', borderRadius: '50%' }} />
                    <Typography sx={{ color: '#F9EFEC', fontSize: '13px', fontWeight: '500' }}>
                      {t(el.industryVal)}
                    </Typography>
                  </Box>

                  <Box sx={{
                    padding: '10px 16px',
                    backgroundColor: '#1F1F1F',
                    border: '1px solid #262626',
                    borderRadius: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    gap: '10px'
                  }}>
                    <Typography sx={{ color: '#B3B3B2', fontSize: '13px' }}>
                      {t("services.section3.serviceUtilized")}
                    </Typography>
                    <Box sx={{ width: '4px', height: '4px', backgroundColor: '#CE7D63', borderRadius: '50%' }} />
                    <Typography sx={{ color: '#F9EFEC', fontSize: '13px', fontWeight: '500' }}>
                      {t(el.serviceVal)}
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Box sx={{
                width: { xs: '100%', lg: '55%' },
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Stack direction='row' spacing={1.5} sx={{ marginBottom: '20px' }}>
                  {['challenge', 'solution', 'results'].map((tab) => {
                    const isActive = tab === 'solution'
                    return (
                      <Button
                        key={tab}
                        sx={{
                          backgroundColor: isActive ? '#CE7D63' : '#1F1F1F',
                          color: isActive ? '#0F0F0F' : '#B3B3B2',
                          padding: '8px 24px',
                          borderRadius: '8px',
                          fontWeight: '600',
                          fontSize: '13px',
                          textTransform: 'uppercase',
                          border: '1px solid',
                          borderColor: isActive ? '#CE7D63' : '#262626',
                        }}
                      >
                        {t(`services.section3.tabs.${tab}`)}
                      </Button>
                    )
                  })}
                </Stack>

                <Box sx={{
                  backgroundColor: '#1A1A1A',
                  border: '1px solid #1F1F1F',
                  borderRadius: '16px',
                  padding: { xs: '24px 20px', lg: '30px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <Typography sx={{
                    color: '#F9EFEC',
                    fontSize: { xs: '20px', lg: '28px' },
                    fontWeight: '600',
                    marginBottom: '16px',
                    textTransform: 'uppercase'
                  }}>
                    {t("services.section3.tabs.solution")}
                  </Typography>
                  <Typography sx={{
                    color: '#B3B3B2',
                    fontSize: { xs: '13px', lg: '14px' },
                    lineHeight: 1.7
                  }}>
                    {t(el.solutionDesc)}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          )
        })}
      </Stack>
    </section>
  )
}
