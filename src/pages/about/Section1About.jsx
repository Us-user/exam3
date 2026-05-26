import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowRightLong } from 'react-icons/fa6'

let list=[
    {
        id:1,
        title:'about.section1.card1',
        value:"200+"
    },
    {
        id:2,
        title:'about.section1.card2',
        value:"280+"
    },
    {
        id:3,
        title:'about.section1.card3',
        value:"100%"
    },
    {
        id:4,
        title:'about.section1.card4',
        value:"420K"
    },
]

export default function Section1About() {
    const {t}=useTranslation()
    return (
        <section className='w-[90%] m-auto'>

            <Stack spacing={3} direction={{ xs: 'column', lg: 'row' }}>
                <Box sx={{
                    backgroundColor: '#1A1A1A',
                    borderRadius: '16px',
                    paddingTop: { xs: '24px', lg: '60px' },
                    paddingRight: { xs: '20px', md: '40px', lg: '60px' },
                    paddingLeft: { xs: '20px', md: '40px', lg: '60px' },
                    width: { xs: '100%', lg: '84%' },
                    paddingBottom: '40px',
                }}>
                    <Stack spacing={2} sx={{
                        alignItems: 'start',
                        flexDirection: { xs: 'column', lg: 'row' }
                    }}>
                        <Typography sx={{
                            color: '#F9EFEC',
                            width: { xs: '100%', lg: '70%' },
                            fontSize: { xs: '30px', lg: '48px' }
                        }}>
                            {t("about.section1.title")}
                        </Typography>
                        <Stack direction={'row'} spacing={1} sx={{
                            color: '#CE7D63',
                            alignItems: 'center'
                        }}>
                            <Box sx={{
                                padding: '14px',
                                backgroundColor: '#CE7D63',
                                borderRadius: '50%'
                            }}><FaArrowRightLong size={23} color='black' /></Box>
                            <Typography sx={{ fontWeight: '500' }}>
                                {t('home.section1.left.start')}
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>

                <Stack  direction={'row'} sx={{
                    backgroundColor:'#1A1A1A',
                    borderRadius:'14px',
                    padding:'20px',
                    flexWrap:'wrap',
                    alignItems:'center',
                    gap:'12px'
                }}>
                    {list.map((el)=>{
                        return(
                            <Box sx={{
                                width:'47%',
                                backgroundColor:'#1F1F1F',
                                padding:'30px 20px',
                                textAlign:'center',
                                borderRadius:'14px'
                            }}>
                                <Typography sx={{
                                    color:'#B3B3B2'
                                }}>{t(`${el.title}`)}</Typography>
                                <Typography variant='h3' sx={{
                                    color:'#DA9E8B'
                                }}>{t(`${el.value}`)}</Typography>
                            </Box>
                        )
                    })}
                </Stack>

                

                

            </Stack>

        </section>
    )
}
