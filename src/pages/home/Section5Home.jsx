import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiArrowUpRight } from "react-icons/fi";

import s51 from '../../assets/home/s51.svg'
import s52 from '../../assets/home/s52.svg'
import t1 from '../../assets/home/t1.svg'
import t2 from '../../assets/home/t2.svg'
import t3 from '../../assets/home/t3.svg'
import t4 from '../../assets/home/t4.svg'
import t5 from '../../assets/home/t5.svg'
import { LuSparkles } from "react-icons/lu"
import { LuLightbulb } from "react-icons/lu"


let list=[
    {
        id:1,
        image: s51,
        title:"home.section5.card1.title",
        desc:"home.section5.card1.desc",
        categ:"home.section5.card1.categ",
        time:"home.section5.card1.time",
        skils:["React Native","Firebase",'Redux','REST API','MongoDB'],
        team:[t1,t2,t3,t4,t5],
        icon:<LuSparkles color='#CE7D63' size={28}/>
    },
    {
        id:2,
        image: s52,
        title:"home.section5.card2.title",
        desc:"home.section5.card2.desc",
        categ:"home.section5.card2.categ",
        time:"home.section5.card2.time",
        skils:['WordPress','PHP','HTML5', 'CSS3','JavaScript'],
        team:[t1,t2,t3,t4,t5],
        icon:<LuLightbulb color='#CE7D63' size={28}/>
    },
]

export default function Section5Home() {
    const {t}=useTranslation()
  return (
    <section className='w-[90%] m-auto mb-24'>
        <Stack direction={'row'} sx={{
            backgroundColor:'#1A1A1A',
            borderRadius:'14px',
            padding:'30px',
            alignItems:'center',
            justifyContent:'space-between',
            marginBottom:'20px'
        }}>
            <Typography sx={{
                color:'#F9EFEC',
                fontSize:{xs:'30px',lg:'52px'}
            }}>{t("home.section5.title")}</Typography>

            <Stack spacing={1} direction={'row'} sx={{
                alignItems:'center',
                display:{xs:'none',lg:'flex'}
            }}>
                <Box sx={{
                    padding:'16px',
                    border:'1px solid #262626',
                    borderRadius:'50%'
                }}><FiArrowUpRight size={30} color='#E7BEB1'/></Box>
                <Typography sx={{
                    color:'#B3B3B2'
                }}>{t("home.section5.desc")}</Typography>
            </Stack>
        </Stack>

        <Stack spacing={2}>
            {list.map((el)=>{
                return(
                    <Stack  sx={{
                        border:'2px solid #1F1F1F',
                        borderRadius:'20px',
                        padding:'20px',
                        display:'flex',
                        alignItems:'center',
                        flexDirection:{xs:'column-reverse',lg:'row'},
                        gap:'12px'
                    }}>
                        <Box sx={{
                            backgroundColor:'#1A1A1A',
                            borderRadius:'14px',
                            padding:{xs:'30px 15px',lg:'40px 30px'},
                            width:{xs:'100%',lg:'48%'}
                        }}>
                            <Stack spacing={4} direction={'row'} sx={{
                                justifyContent:'space-between'
                            }}>
                                <Stack spacing={1} direction={'row'} sx={{
                                    alignItems:'center'
                                }}>
                                    <Box sx={{
                                        border:'1px solid #333333',
                                        padding:'16px',
                                        borderRadius:'12px',
                                        backgroundColor:'#1F1F1F'
                                    }}>{el.icon}</Box>
                                    <Typography sx={{
                                        color:'#F9EFEC'
                                    }}>{t(`${el.title}`)}</Typography>
                                </Stack>
                                
                                <Stack spacing={1} direction={'row'} sx={{
                                    alignItems:'center',
                                    display:{xs:'none',lg:'flex'}
                                }}>
                                    <Box sx={{
                                        border:'1px solid #333333',
                                        padding:'10px',
                                        borderRadius:'50%'
                                    }}><FiArrowUpRight color='#E7BEB1' size={28}/></Box>
                                    <Typography sx={{
                                        color:'#B3B3B2'
                                    }}>{t("home.section5.details")}</Typography>
                                </Stack>
                            </Stack>

                            <Stack direction={'row'} spacing={1} sx={{
                                padding:'10px 16px',
                                backgroundColor:'#1F1F1F',
                                borderRadius:'45px',
                                alignItems:'center',
                                width:'fit-content',
                                marginTop:'20px'
                            }}>
                                <Typography sx={{
                                    color:'#B3B3B2'
                                }}>{t("home.section5.category")}</Typography>

                                <Box sx={{
                                    width:'4px',
                                    height:'4px',
                                    backgroundColor:'#CE7D63',
                                    borderRadius:'50%'
                                }}></Box>

                                <Typography sx={{
                                    color:'#E6E6E6',
                                }}>{t(`${el.categ}`)}</Typography>
                            </Stack>

                            <Stack direction={'row'} spacing={1} sx={{
                                padding:'10px 16px',
                                backgroundColor:'#1F1F1F',
                                borderRadius:'45px',
                                alignItems:'center',
                                width:'fit-content',
                                marginTop:'20px'
                            }}>
                                <Typography sx={{
                                    color:'#B3B3B2'
                                }}>{t("home.section5.time")}</Typography>

                                <Box sx={{
                                    width:'4px',
                                    height:'4px',
                                    backgroundColor:'#CE7D63',
                                    borderRadius:'50%'
                                }}></Box>

                                <Typography sx={{
                                    color:'#E6E6E6',
                                }}>{t(`${el.time}`)}</Typography>
                            </Stack>

                            <Typography sx={{
                                color:'#B3B3B2',
                                marginTop:'20px'
                            }}>{t(`${el.desc}`)}</Typography>
                        </Box>
                        <Box component={'img'} src={el.image}></Box>

                        <Box sx={{
                            display:{xs:'none',lg:'block'}
                        }}>
                            <Box sx={{
                                backgroundColor:'#1A1A1A',
                                borderRadius:'14px',
                                padding:'30px'
                            }}>
                                <Typography sx={{
                                    color:'white',
                                    fontWeight:'600'
                                }}>{t("home.section5.techUsed")}</Typography>
                                <Stack spacing={2} direction={'row'} sx={{
                                    flexWrap:'wrap',
                                    alignItems:'center'
                                }}>
                                    {el.skils.map((el)=>{
                                        return(
                                            <Typography sx={{
                                                color:'#E6E6E6',
                                                padding:'10px 16px',
                                                backgroundColor:'#1F1F1F',
                                                borderRadius:'45px',
                                                marginBottom:'12px'
                                            }}>{el}</Typography>
                                        )
                                    })}

                                </Stack>

                            </Box>

                            <Stack direction={'row'} spacing={3} sx={{
                                backgroundColor:'#1A1A1A',
                                borderRadius:'14px',
                                padding:'30px',
                                marginTop:'10px',
                                alignItems:'center'
                            }}>
                                <Typography sx={{color:'white', fontWeight:'600'}}>{t("home.section5.team")}</Typography>
                                <Stack spacing={1} direction={'row'}>
                                    {el.team.map((el)=>{
                                        return(
                                            <Avatar src={el}/>
                                        )
                                    })}
                                </Stack>
                            </Stack>

                            <Button variant='contained' sx={{
                                backgroundColor:'#CE7D63',
                                color:'#0F0F0F',
                                width:'100%',
                                marginTop:'10px',
                                padding:'10px'
                            }}>{t("home.section5.bookCall")}</Button>
                        </Box>
                    </Stack>
                )
            })}
        </Stack>
    </section>
  )
}
