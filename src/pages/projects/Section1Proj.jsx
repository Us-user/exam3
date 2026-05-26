import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowRightLong } from 'react-icons/fa6'

import s1 from '../../assets/projects/s1.png'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Section1Proj() {
    const { t } = useTranslation()
    return (
        <section className='w-[90%] m-auto my-12'>
            <Stack spacing={3} direction={{ xs: 'column', lg: 'row' }}>
                <Box sx={{
                    backgroundColor: '#1A1A1A',
                    borderRadius: '16px',
                    paddingTop: { xs: '24px', lg: '40px' },
                    paddingRight: { xs: '20px', md: '40px', lg: '60px' },
                    paddingLeft: { xs: '20px', md: '40px', lg: '60px' },
                    width: { xs: '100%', lg: '70%' },
                    paddingBottom: '20px',
                    overflow: 'hidden'
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
                            {t("projects.section1.title")}
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

                    <Typography sx={{
                        color: '#676665',
                        marginY: '24px',
                        width: { xs: '100%', lg: '90%' },
                        marginBottom: { xs: '40px', lg: '100px' }
                    }}>
                        {t("projects.section1.desc")}
                    </Typography>

                </Box>

                <Box sx={{
                    backgroundImage: `url(${s1})`,
                    borderRadius: '20px',
                    padding: '30px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: { xs: '300px', lg: 'auto' }
                }}>
                    <Stack spacing={2} direction={'row'} sx={{
                        alignItems: 'end',
                        height: '100%'
                    }}>


                        <Typography variant='body2' sx={{
                            backgroundColor: 'transparent',
                            padding: '10px 14px',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '16px',
                            backgroundColor: '#FFFFFF33',
                            color: 'white'
                        }}>{t("services.section1.web")}</Typography>

                        <Stack spacing={1} direction={'row'} sx={{
                            alignItems: 'center'
                        }}>
                            <Box sx={{
                                backgroundColor: 'white',
                                padding: '10px',
                                borderRadius: '50%'
                            }}><FiArrowUpRight /></Box>
                            <Typography sx={{ color: 'white' }}>{t("services.section1.vlog")}</Typography>
                        </Stack>
                    </Stack>
                </Box>

            </Stack>

        </section>
    )
}
