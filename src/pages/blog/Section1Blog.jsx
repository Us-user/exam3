import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdOutlineArrowOutward } from "react-icons/md";

let buttons = [
    {
        title: 'blog.section1.button1',
        status: false
    },
    {
        title: 'blog.section1.button2',
        status: true
    },
    {
        title: 'blog.section1.button3',
        status: false
    },

]

import b1 from '../../assets/blog/b1.svg'
import MainSectionBlog from './MainSectionBlog.jsx';
import { Link } from 'react-router-dom';

export default function Section1Blog() {
    const { t } = useTranslation()
    return (
        <section className='w-[90%] m-auto border-2 border-[#1F1F1F] p-5 rounded-3xl'>
            <Stack direction={'row'} sx={{
                padding: '30px',
                borderRadius: '16px',
                backgroundColor: '#1A1A1A',
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                <Typography sx={{
                    color: '#F9EFEC',
                    fontSize: { xs: '30px', lg: '48px' }
                }}>{t("blog.section1.title")}</Typography>

                <Stack spacing={2} direction={'row'} sx={{
                    display:{xs:'none', lg:'flex'}
                }}>
                    {buttons.map((el)=>{
                        return(
                            <Button sx={{
                                backgroundColor: el.status ? '#CE7D63':"#1F1F1F",
                                color: el.status ? '#0F0F0F':"#B3B3B2",
                                padding:'10px'
                            }}>{t(`${el.title}`)}</Button>
                        )
                    })}

                </Stack>
            </Stack>


            <Stack direction={"row"} spacing={2} sx={{
                marginTop:'20px',
                display:{xs:'none',lg:'flex'}
            }}>
                <img src={b1} alt="" />
                <Box sx={{
                    padding:'50px',
                    borderRadius:'12px',
                    backgroundColor:'#1A1A1A'
                }}>
                    <Typography variant='h4' sx={{
                        color:'#F9EFEC'
                    }}>{t("blog.prod.title")}</Typography>

                    <Stack spacing={2} direction={'row'} sx={{
                        marginTop:'20px'
                    }}>
                        <Stack spacing={1} direction={'row'} sx={{
                            alignItems:'center',
                            padding:'8px 12px',
                            backgroundColor:'#1F1F1F',
                            borderRadius:'45px'
                        }}>
                            <Typography sx={{color:'#B3B3B2'}}>{t("blog.Category")}</Typography>
                            <Box sx={{width:'4px',height:'4px',borderRadius:'50%',backgroundColor:'#CE7D63'}}></Box>
                            <Typography sx={{color:'#E6E6E6'}}>{t("blog.prod.category")}</Typography>
                        </Stack>
                        <Stack spacing={1} direction={'row'} sx={{
                            alignItems:'center',
                            padding:'8px 12px',
                            backgroundColor:'#1F1F1F',
                            borderRadius:'45px'
                        }}>
                            <Typography sx={{color:'#B3B3B2'}}>{t("blog.realTime")}</Typography>
                            <Box sx={{width:'4px',height:'4px',borderRadius:'50%',backgroundColor:'#CE7D63'}}></Box>
                            <Typography sx={{color:'#E6E6E6'}}>{t("blog.prod.time")}</Typography>
                        </Stack>
                        <Stack spacing={1} direction={'row'} sx={{
                            alignItems:'center',
                            padding:'8px 12px',
                            backgroundColor:'#1F1F1F',
                            borderRadius:'45px'
                        }}>
                            <Typography sx={{color:'#B3B3B2'}}>{t("blog.Author")}</Typography>
                            <Box sx={{width:'4px',height:'4px',borderRadius:'50%',backgroundColor:'#CE7D63'}}></Box>
                            <Typography sx={{color:'#E6E6E6'}}>{t("blog.prod.author")}</Typography>
                        </Stack>
                    </Stack>

                    <Typography sx={{
                        color:'#B3B3B2',
                        marginTop:'40px'
                    }}>{t("blog.prod.desc")}</Typography>

                    <Stack component={Link} to='/blogsOpen' direction={'row'} sx={{
                        alignItems:'center',
                        justifyContent:'space-between',
                        marginTop:'70px'
                    }}>
                        <Stack spacing={1} direction={'row'} sx={{
                            alignItems:'center',

                        }}>
                            <Box sx={{border:'1px solid #333333',padding:'16px',backgroundColor:'#1F1F1F',borderRadius:'50%'}}><MdOutlineArrowOutward color='#E7BEB1' size={30}/></Box>
                            <Typography sx={{color:'#B3B3B2'}}>{t("blog.read")}</Typography>
                        </Stack>

                        <Stack spacing={1} direction={'row'} sx={{
                            alignItems:'center'
                        }}>
                            <Typography sx={{color:'#B3B3B2'}}>{t("blog.publ")}</Typography>
                            <Typography sx={{color:'#F9EFEC'}}>{t("blog.prod.date")}</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>

            <MainSectionBlog/>

        </section>
    )
}
