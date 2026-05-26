import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowRightLong } from "react-icons/fa6";
import FooterSwiper from '../../components/FooterSwiper.jsx';
import { FiArrowUpRight } from "react-icons/fi";

import s1 from '../../assets/home/s1.svg'

export default function Section1Home() {
  const { t } = useTranslation()
  return (
    <section className='w-[90%] mx-auto'>
      <Stack spacing={3} direction={{ xs: 'column', lg: 'row' }}>
        <Box sx={{
          backgroundColor:'#1A1A1A',
          borderRadius:'16px',
          paddingTop:{xs:'24px', lg:'40px'},
          paddingRight:{xs:'20px', md:'40px', lg:'60px'},
          paddingLeft:{xs:'20px', md:'40px', lg:'60px'},
          width:{xs:'100%',lg:'70%'},
          paddingBottom:'20px',
          overflow: 'hidden'
        }}>
          <Stack spacing={2}  sx={{
            alignItems:'start',
            flexDirection:{xs:'column',lg:'row'}
          }}>
            <Typography  sx={{
              color:'#F9EFEC',
              width:{xs:'100%',lg:'70%'},
              fontSize:{xs:'30px',lg:'48px'}
            }}>
              {t("home.section1.left.title")}
            </Typography>
            <Stack direction={'row'} spacing={1} sx={{
              color:'#CE7D63',
              alignItems:'center'
            }}>
              <Box sx={{
                padding:'14px',
                backgroundColor:'#CE7D63',
                borderRadius:'50%'
              }}><FaArrowRightLong size={23} color='black'/></Box>
              <Typography sx={{fontWeight:'500'}}>
                {t('home.section1.left.start')}
              </Typography>
            </Stack>


          </Stack>

          <Typography sx={{
            color:'#676665',
            marginY:'24px',
            width:{xs:'100%',lg:'90%'},
            marginBottom:{xs:'40px', lg:'100px'}
          }}>
            {t("home.section1.left.desc")}
          </Typography>

          <FooterSwiper text={'BRANDING'}/>
        </Box>

        <Box sx={{
          borderRadius:'16px',
          display:{xs:'none',lg:'block'},
          position:'relative'
        }}>
          <Box sx={{
            position:'absolute',
            top:'13px',
            right:'0',
            padding:'12px',
            backgroundColor:'#CE7D63',
            borderRadius:'50% '
          }}>
            <FiArrowUpRight size={54} />
            

          </Box>
          <Box component={'img'} src={s1} sx={{
            borderTopLeftRadius:'16px',
            borderTopRightRadius:'16px'
          }}/>
          <Box sx={{
            padding:'24px',
            backgroundColor:'#1F1F1F'
          }}>
            <Typography variant='h6' sx={{
              color:'#F9EFEC'
            }}>
              {t("home.section1.right.title")}
            </Typography>
             <Typography variant='p' sx={{
              color:'#B3B3B2'
            }}>
              {t("home.section1.right.desc")}
            </Typography>
          </Box>
        </Box>
      </Stack>

    </section>
  )
}
