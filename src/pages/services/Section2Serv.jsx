import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiArrowUpRight } from 'react-icons/fi'
import { LuCode, LuLayoutGrid, LuPencilLine, LuSmartphone } from 'react-icons/lu'

import s21 from '../../assets/services/s21.png'
import s22 from '../../assets/services/s22.png'
import s23 from '../../assets/services/s23.png'
import s24 from '../../assets/services/s24.png'
import s25 from '../../assets/services/s25.png'
import s26 from '../../assets/services/s26.png'
import s27 from '../../assets/services/s27.png'
import s28 from '../../assets/services/s28.png'

let list = [
    {
        id: 1,
        title: "home.section4.card1.title",
        desc: "home.section4.card1.desc",
        price: "home.section4.card1.price",
        icon: <LuPencilLine color='#CE7D63' size={28} />
    },
    {
        id: 2,
        title: "home.section4.card2.title",
        desc: "home.section4.card2.desc",
        price: "home.section4.card2.price",
        icon: <LuSmartphone color='#CE7D63' size={28} />
    },
    {
        id: 3,
        title: "home.section4.card3.title",
        desc: "home.section4.card3.desc",
        price: "home.section4.card3.price",
        icon: <LuCode color='#CE7D63' size={28} />
    },
    {
        id: 4,
        title: "home.section4.card4.title",
        desc: "home.section4.card4.desc",
        price: "home.section4.card4.price",
        icon: <LuLayoutGrid color='#CE7D63' size={28} />
    },
]

let list2 = [
    {
        id: 1,
        title: "services.section2.card1",
        img1: s21,
        img2: s22
    },
    {
        id: 2,
        title: "services.section2.card2",
        img1: s23,
        img2: s24
    },
    {
        id: 3,
        title: "services.section2.card3",
        img1: s25,
        img2: s26
    },
    {
        id: 4,
        title: "services.section2.card4",
        img1: s27,
        img2: s28
    },
]

export default function Section2Serv() {
    const { t } = useTranslation()
    return (
        <section className='w-[90%] m-auto border-2 border-[#1F1F1F] p-4 rounded-3xl mt-25'>
            <Typography sx={{
                width: 'full',
                backgroundColor: '#1A1A1A',
                padding: '30px',
                borderRadius: '16px',
                fontSize: { xs: "30px", lg: '54px' },
                color: 'white',
                marginBottom: '20px'
            }}>{t("home.section4.title")}</Typography>

            <Stack direction={'row'} sx={{
                justifyContent: 'space-between'
            }}>
                <Stack spacing={2} direction={'column'} sx={{
                    width:{
                        xs:'100%',
                        lg:'48%'
                    }
                }}
                >
                    {list.map((el) => {
                        return (
                            <Box sx={{
                                borderRadius: '14px',
                                backgroundColor: '#1A1A1A',
                                padding: { xs: '20px', lg: '60px' },
                                marginBottom: '22px'
                            }}>
                                <Stack direction={'row'} sx={{
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <Stack spacing={2} direction={'row'} sx={{
                                        alignItems: 'center'
                                    }}>
                                        <Box sx={{
                                            backgroundColor: '#1F1F1F',
                                            border: '1px solid #333333',
                                            padding: '14px',
                                            borderRadius: '10px'
                                        }}>{el.icon}</Box>
                                        <Typography variant='h6' sx={{
                                            color: '#F9EFEC'
                                        }}>{t(`${el.title}`)}</Typography>
                                    </Stack>
                                    <Stack spacing={1} direction={'row'} sx={{
                                        alignItems: 'center',
                                        display: { xs: 'none', lg: 'flex' }
                                    }}>
                                        <Box sx={{
                                            backgroundColor: '#1F1F1F',
                                            border: '1px solid #333333',
                                            padding: '10px',
                                            borderRadius: '50%'
                                        }}><FiArrowUpRight color='#E7BEB1' size={26} /></Box>
                                        <Typography sx={{
                                            color: '#B3B3B2',
                                            fontWeight: '500'
                                        }}>{t("home.section4.book")}</Typography>
                                    </Stack>

                                </Stack>

                                <Typography sx={{
                                    color: '#B3B3B2',
                                    marginY: '20px'
                                }}>
                                    {t(`${el.desc}`)}
                                </Typography>

                                <Typography variant='h5' sx={{
                                    color: '#F9EFEC',
                                    textAlign: 'end'
                                }}>
                                    {t(`${el.price}`)}
                                </Typography>

                                <Button sx={{
                                    backgroundColor: '#CE7D63',
                                    color: '#0F0F0F',
                                    marginTop: '14px',
                                    width: '100%',
                                    display: { xs: 'block', lg: 'none' }
                                }}>BOOK A CALL</Button>
                            </Box>
                        )
                    })}
                </Stack>

                <Stack spacing={2} direction={'column'} sx={{
                    width: '48%',
                    display:{xs:'none',lg:'flex'}
                }}>
                    {list2.map((el) => {
                        return (
                            <Box sx={{
                                padding: '30px',
                                borderRadius: '12px',
                                backgroundColor: '#1A1A1A',
                            }}>
                                <Stack direction={'row'} sx={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <Typography variant='h6' sx={{
                                        color: '#F9EFEC'
                                    }}>{t(el.title)}</Typography>

                                    <Stack spacing={1} direction={'row'} sx={{
                                        alignItems: 'center'
                                    }}>
                                        <Box sx={{
                                            padding: '12px',
                                            borderRadius: '50%',
                                            border: '1px solid #262626'
                                        }}><FiArrowUpRight color='#E7BEB1' size={30} /></Box>
                                        <Typography sx={{
                                            color: '#B3B3B2'
                                        }}>{t("services.section2.all")}</Typography>
                                    </Stack>

                                </Stack>

                                <Stack spacing={1} direction={'row'} sx={{
                                    marginTop:'20px',
                                    justifyContent:'space-between'
                                }}>
                                    <Box sx={{
                                        backgroundImage: `url(${el.img1})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '174px',
                                        width: '48%',
                                        display:'flex',
                                        alignItems:'end',
                                        padding:'14px'
                                    }}>
                                        <Stack spacing={1} direction={'row'} sx={{
                                            alignItems: 'center',
                                        }}>
                                            <Box sx={{
                                                backgroundColor: 'white',
                                                padding: "12px",
                                                borderRadius: '50%'
                                            }}><FiArrowUpRight size={30} /></Box>
                                            <Typography sx={{ color: 'white' }}>{t("services.section2.open")}</Typography>

                                        </Stack>
                                    </Box>

                                    <Box sx={{
                                        backgroundImage: `url(${el.img2})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '174px',
                                        width: '48%',
                                        display:'flex',
                                        alignItems:'end',
                                        padding:'14px'
                                    }}>
                                        <Stack spacing={1} direction={'row'} sx={{
                                            alignItems: 'center'
                                        }}>
                                            <Box sx={{
                                                backgroundColor: 'white',
                                                padding: "12px",
                                                borderRadius: '50%'
                                            }}><FiArrowUpRight size={30} /></Box>
                                            <Typography sx={{ color: 'white' }}>{t("services.section2.open")}</Typography>
                                        </Stack>
                                    </Box>
                                </Stack>

                            </Box>
                        )
                    })}
                </Stack>
            </Stack>



        </section>
    )
}
