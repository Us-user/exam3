import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FiArrowDown } from 'react-icons/fi'

export default function Section1Careers() {
  const { t } = useTranslation()
  return (
    <section className='w-[90%] m-auto mt-14'>
      <Stack spacing={3} direction={{ xs: 'column', lg: 'row' }} >
        <Box sx={{
          backgroundColor: '#1A1A1A',
          borderRadius: '16px',
          paddingTop: { xs: '24px', lg: '60px' },
          paddingRight: { xs: '20px', lg: '60px' },
          paddingLeft: { xs: '20px', lg: '60px' },
          width: { xs: '100%', lg: '66%' },
          paddingBottom: '40px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Stack spacing={2} sx={{
            alignItems: 'start',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', lg: 'row' },
            width: '100%'
          }}>
            <Typography sx={{
              color: '#F9EFEC',
              width: { xs: '100%', lg: '70%' },
              fontSize: { xs: '30px', lg: '38px' },
              fontWeight: '500',
            }}>
              {t("careers.section1.title")}
            </Typography>
            <Stack direction={'row'} spacing={1} sx={{
              color: '#CE7D63',
              alignItems: 'center',
              marginTop: { xs: '16px', lg: '0px' },
              cursor: 'pointer'
            }}>
              <Box sx={{
                padding: '14px',
                backgroundColor: '#CE7D63',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaArrowRightLong size={23} color='black' />
              </Box>
              <Typography sx={{ fontWeight: '500', fontSize: '14px', whiteSpace: 'nowrap' }}>
                {t('careers.section1.start')}
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box sx={{
          backgroundColor: '#1A1A1A',
          borderRadius: '16px',
          padding: { xs: '24px', md: '40px' },
          width: { xs: '100%', lg: '34%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <Box>
            <Typography sx={{
              color: '#F9EFEC',
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px'
            }}>
              {t("careers.section1.right.title")}
            </Typography>
            <Typography sx={{
              color: '#98989A',
              fontSize: '14px',
              fontWeight: '300'
            }}>
              {t("careers.section1.right.desc")}
            </Typography>
          </Box>

          <Stack direction={'row'} spacing={1} sx={{
            color: '#E7BEB1',
            alignItems: 'center',
            marginTop: '24px',
          }}>
            <Box sx={{
              padding: '10px',
              border: '1px solid #333333',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FiArrowDown size={20} />
            </Box>
            <Typography sx={{ fontWeight: '500', fontSize: '14px' }}>
              {t('careers.section1.right.knowMore')}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </section>
  )
}
