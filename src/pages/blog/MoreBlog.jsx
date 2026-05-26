import React from 'react'
import MainSectionBlog from './MainSectionBlog.jsx'
import { Box, Stack, Typography } from '@mui/material'
import { useTransition } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowRightLong } from 'react-icons/fa6'

import { FaTwitter } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import img from '../../assets/Image.svg'

export default function MoreBlog() {
    const { t } = useTranslation()
    return (
        <section className='w-[90%] m-auto'>
            <Stack spacing={3} direction={{ xs: 'column', lg: 'row' }} sx={{marginBottom:'20px'}}>
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
                            {t("blog.open.section1.title")}
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
                    padding: '30px',
                    borderRadius: '14px',
                    width: {xs:"100%",lg:'32%'}
                }}>
                    <Stack spacing={1}>
                        <Stack direction={'row'} sx={{
                            backgroundColor: '#1F1F1F',
                            padding: '20px',
                            borderRadius: '14px',
                            justifyContent: 'space-between'
                        }}>
                            <Typography sx={{ color: '#B3B3B2' }}>{t("blog.Author")}</Typography>
                            <Typography sx={{ color: 'white' }}>{t("blog.open.header.name")}</Typography>
                        </Stack>
                    
                        <Stack direction={'row'} sx={{
                            backgroundColor: '#1F1F1F',
                            padding: '20px',
                            borderRadius: '14px',
                            justifyContent: 'space-between'
                        }}>
                            <Typography sx={{ color: '#B3B3B2' }}>{t("blog.publ")}</Typography>
                            <Typography sx={{ color: 'white' }}>{t("blog.open.header.date")}</Typography>
                        </Stack>
                        <Stack direction={'row'} sx={{
                            backgroundColor: '#1F1F1F',
                            padding: '20px',
                            borderRadius: '14px',
                            justifyContent: 'space-between'
                        }}>
                            <Typography sx={{ color: '#B3B3B2' }}>{t("blog.category")}</Typography>
                            <Typography sx={{ color: 'white' }}>{t("blog.open.header.role")}</Typography>
                        </Stack>
                        <Stack direction={'row'} sx={{
                            backgroundColor: '#1F1F1F',
                            padding: '20px',
                            borderRadius: '14px',
                            justifyContent: 'space-between'
                        }}>
                            <Typography sx={{ color: '#B3B3B2' }}>{t("blog.realTime")}</Typography>
                            <Typography sx={{ color: 'white' }}>{t("blog.open.header.time")}</Typography>
                        </Stack>
                    </Stack>

                </Box>
            </Stack>

            <img src={img} alt="" />







            <Stack sx={{
                flexDirection:{xs:"column",lg:'row'},
                marginTop:'30px',
                alignItems: 'flex-start'
            }}>
                <Stack spacing={3} sx={{
                    position: { lg: 'sticky' },
                    top: { lg: '100px' },
                    flexShrink: 0
                }}>
                    <Box sx={{padding:'14px',borderRadius:'8px',border:"1px solid #333333", backgroundColor:'#1F1F1F'}}><FaTwitter color='#CE7D63' size={27}/></Box>
                    <Box sx={{padding:'14px',borderRadius:'8px',border:"1px solid #333333", backgroundColor:'#1F1F1F'}}><FaRedditAlien color='#CE7D63' size={27}/></Box>
                    <Box sx={{padding:'14px',borderRadius:'8px',border:"1px solid #333333", backgroundColor:'#1F1F1F'}}><FaFacebookF color='#CE7D63' size={27}/></Box>
                </Stack>

                <Box sx={{
                    flex: 1,
                    marginLeft: { xs: 0, lg: '50px' },
                    marginTop: { xs: '30px', lg: 0 }
                }}>
                    
                    <Typography sx={{
                        color: '#F9EFEC',
                        fontSize: { xs: '20px', lg: '26px' },
                        fontWeight: '600',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        lineHeight: '1.4'
                    }}>
                        {t("blog.open.article.heading1")}
                    </Typography>
                    <Typography sx={{ color: '#B3B3B2', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                        {t("blog.open.article.p1")}
                    </Typography>
                    <Typography sx={{ color: '#B3B3B2', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                        {t("blog.open.article.p2")}
                    </Typography>
                    <Typography sx={{ color: '#B3B3B2', fontSize: '15px', lineHeight: '1.7', marginBottom: '40px' }}>
                        {t("blog.open.article.p3")}
                    </Typography>

                    
                    <Typography sx={{
                        color: '#F9EFEC',
                        fontSize: { xs: '20px', lg: '26px' },
                        fontWeight: '600',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        lineHeight: '1.4'
                    }}>
                        {t("blog.open.article.heading2")}
                    </Typography>
                    <Typography sx={{ color: '#B3B3B2', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                        {t("blog.open.article.p4")}
                    </Typography>
                    <Typography sx={{ color: '#B3B3B2', fontSize: '15px', lineHeight: '1.7', marginBottom: '40px' }}>
                        {t("blog.open.article.p5")}
                    </Typography>

                    
                    <Typography sx={{
                        color: '#F9EFEC',
                        fontSize: { xs: '20px', lg: '26px' },
                        fontWeight: '600',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        lineHeight: '1.4'
                    }}>
                        {t("blog.open.article.heading3")}
                    </Typography>
                    <Typography sx={{ color: '#B3B3B2', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                        {t("blog.open.article.p6")}
                    </Typography>
                    <Typography sx={{ color: '#B3B3B2', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                        {t("blog.open.article.p7")}
                    </Typography>
                    <Typography sx={{ color: '#B3B3B2', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                        {t("blog.open.article.p8")}
                    </Typography>
                </Box>

            </Stack>




















            <MainSectionBlog />
        </section>
    )
}
