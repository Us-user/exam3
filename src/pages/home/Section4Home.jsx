import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { LuPencilLine } from "react-icons/lu"
import { LuSmartphone } from "react-icons/lu"
import { LuCode } from "react-icons/lu"
import { LuLayoutGrid } from "react-icons/lu"

import { FiArrowUpRight } from "react-icons/fi";

let list=[
    {
        id:1,
        title:"home.section4.card1.title",
        desc:"home.section4.card1.desc",
        price:"home.section4.card1.price",
        icon: <LuPencilLine color='#CE7D63' size={28}/>
    },
    {
        id:2,
        title:"home.section4.card2.title",
        desc:"home.section4.card2.desc",
        price:"home.section4.card2.price",
        icon: <LuSmartphone color='#CE7D63' size={28}/>
    },
    {
        id:3,
        title:"home.section4.card3.title",
        desc:"home.section4.card3.desc",
        price:"home.section4.card3.price",
        icon: <LuCode color='#CE7D63' size={28}/>
    },
    {
        id:4,
        title:"home.section4.card4.title",
        desc:"home.section4.card4.desc",
        price:"home.section4.card4.price",
        icon: <LuLayoutGrid color='#CE7D63' size={28}/>
    },
]

export default function Section4Home() {
    const {t}=useTranslation()
  return (
    <section className='w-[90%] m-auto border-2 border-[#1F1F1F] p-5 rounded-3xl mb-24'>
        <Box sx={{
            marginBottom:'20px'
        }}>
            <Typography sx={{
                color:'#F9EFEC',
                padding:'40px',
                backgroundColor:'#1A1A1A',
                borderRadius:'16px',
                fontSize:{xs:'28px',lg:'56px'}
            }}>
                {t("home.section4.title")}
            </Typography>
        </Box>

        <Stack sx={{
            flexWrap:{xs:'nowrap',lg:'wrap'},
            justifyContent:'space-between',
            flexDirection:{xs:'column',lg:'row'}
        }}>
            {list.map((el)=>{
                return(
                    <Box sx={{
                        borderRadius:'14px',
                        backgroundColor:'#1A1A1A',
                        padding:{xs:'20px',lg:'60px'},
                        width:{xs:"100%",lg:'49%'},
                        marginBottom:'22px'
                    }}>
                        <Stack direction={'row'} sx={{
                            justifyContent:'space-between',
                            alignItems:'center'
                        }}>
                            <Stack spacing={2} direction={'row'} sx={{
                                alignItems:'center'
                            }}>
                                <Box sx={{
                                    backgroundColor:'#1F1F1F',
                                    border:'1px solid #333333',
                                    padding:'14px',
                                    borderRadius:'10px'
                                }}>{el.icon}</Box>
                                <Typography variant='h6' sx={{
                                    color:'#F9EFEC'
                                }}>{t(`${el.title}`)}</Typography>
                            </Stack>
                            <Stack spacing={1} direction={'row'} sx={{
                                alignItems:'center',
                                display:{xs:'none',lg:'flex'}
                            }}>
                                <Box sx={{
                                    backgroundColor:'#1F1F1F',
                                    border:'1px solid #333333',
                                    padding:'10px',
                                    borderRadius:'50%'
                                }}><FiArrowUpRight color='#E7BEB1' size={26}/></Box>
                                <Typography sx={{
                                    color:'#B3B3B2',
                                    fontWeight:'500'
                                }}>{t("home.section4.book")}</Typography>
                            </Stack>

                        </Stack>

                        <Typography sx={{
                            color:'#B3B3B2',
                            marginY:'20px'
                        }}>
                            {t(`${el.desc}`)}
                        </Typography>

                        <Typography variant='h5' sx={{
                            color:'#F9EFEC',
                            textAlign:'end'
                        }}>
                            {t(`${el.price}`)}
                        </Typography>

                        <Button sx={{
                            backgroundColor:'#CE7D63',
                            color:'#0F0F0F',
                            marginTop:'14px',
                            width:'100%',
                            display:{xs:'block',lg:'none'}
                        }}>BOOK A CALL</Button>
                    </Box>
                )
            })}
        </Stack>

    </section>
  )
}
