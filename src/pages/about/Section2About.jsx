import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiArrowUpRight } from "react-icons/fi";

import i1 from '../../assets/about/i1.svg'
import i2 from '../../assets/about/i2.svg'
import i3 from '../../assets/about/i3.svg'
import i4 from '../../assets/about/i4.svg'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

let list = [
  {
    id: 1,
    name: 'about.section2.card1.name',
    role: 'about.section2.card1.role',
    img: i1
  },
  {
    id: 2,
    name: 'about.section2.card2.name',
    role: 'about.section2.card2.role',
    img: i2
  },
  {
    id: 3,
    name: 'about.section2.card3.name',
    role: 'about.section2.card3.role',
    img: i3
  },
  {
    id: 4,
    name: 'about.section2.card4.name',
    role: 'about.section2.card4.role',
    img: i4
  },
]

export default function Section2About() {
  const { t } = useTranslation()
  return (
    <section className='w-[90%] m-auto border-2 border-[#1F1F1F] p-5 rounded-3xl mt-14'>
      <Stack direction={'row'} sx={{
        padding: '30px',
        backgroundColor: '#1A1A1A',
        borderRadius: '16px',
        justifyContent: "space-between"
      }}>
        <Typography sx={{
          fontSize: { xs: '20px', lg: '34px' },
          color: 'white'
        }}>{t("about.section2.title")}</Typography>

        <Stack spacing={1} direction={"row"} sx={{
          alignItems: 'center',
          display: { xs: 'none', lg: 'flex' }
        }}>
          <Box sx={{
            border: '1px solid #262626',
            borderRadius: '50%',
            padding: '12px',

          }}><FiArrowUpRight size={36} color='#E7BEB1' /></Box>
          <Typography sx={{
            color: '#B3B3B2'
          }}>{t("about.section2.all")}</Typography>
        </Stack>
      </Stack>

      <Stack spacing={2} sx={{
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20px'
      }}>
        {list.map((el) => {
          return (
            <Box sx={{
              borderRadius: '14px',
              padding: '50px',
              textAlign: 'center',
              backgroundColor: '#262626',
              width: {xs:"100%",lg:'24%'}
            }}>
              <Typography sx={{
                color: '#F9EFEC'
              }}>{t(`${el.name}`)}</Typography>
              <Typography sx={{
                color: '#B3B3B2'
              }}>{t(`${el.role}`)}</Typography>

              <Box component={'img'} src={el.img} sx={{
                marginTop: '20px'
              }} />

              <Stack spacing={2} direction={'row'} sx={{
                justifyContent: 'center',
                marginTop:'20px'
              }}>
                <Box sx={{
                  backgroundColor:'#1F1F1F',
                  border:'1px solid  #333333',
                  padding:'10px',
                  borderRadius:'50%'
                }}>
                  <FaFacebookF color='#E7BEB1' size={27} />
                </Box>
                <Box sx={{
                  backgroundColor:'#1F1F1F',
                  border:'1px solid  #333333',
                  padding:'10px',
                  borderRadius:'50%'
                }}>
                  <FaTwitter color='#E7BEB1' size={27} />
                </Box>
                <Box sx={{
                  backgroundColor:'#1F1F1F',
                  border:'1px solid  #333333',
                  padding:'10px',
                  borderRadius:'50%'
                }}>
                  <FaLinkedinIn color='#E7BEB1' size={27} />
                </Box>


              </Stack>


            </Box>
          )
        })}
      </Stack>

    </section>
  )
}
