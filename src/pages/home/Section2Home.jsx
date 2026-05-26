import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiArrowUpRight } from "react-icons/fi";

let list = [
    {
        id: 1,
        title: "home.section2.clients.title",
        value: "home.section2.clients.value"
    },
    {
        id: 2,
        title: "home.section2.projects.title",
        value: "home.section2.projects.value"
    },
    {
        id: 3,
        title: "home.section2.happy.title",
        value: "home.section2.happy.value"
    },
    {
        id: 4,
        title: "home.section2.followers.title",
        value: "home.section2.followers.value"
    },
    {
        id: 5,
        title: "home.section2.experience.title",
        value: "home.section2.experience.value"
    }
]

export default function Section2Home() {
    const { t } = useTranslation()
    return (
        <section className='w-[90%] m-auto border-2 border-[#1F1F1F] p-2.5 rounded-2xl mt-3 mb-24'>
            <Stack direction={'row'} sx={{
                justifyContent: 'space-between',
                flexWrap:{xs:'wrap',lg:'nowrap'},
            }}>
                {list.map((el) => {
                    return (
                        <Box sx={{
                            backgroundColor: '#1A1A1A',
                            padding: '20px 16px',
                            borderRadius: '12px',
                            width: {xs:'48%',lg:'15%'},
                            textAlign: 'center',
                            marginBottom:{xs:'12px',lg:'0'}
                        }}>
                            <Typography sx={{
                                color: '#B3B3B2'
                            }}>
                                {t(el.title)}
                            </Typography>
                            <Typography variant='h3' sx={{
                                color: '#DA9E8B'
                            }}>
                                {t(el.value)}
                            </Typography>
                        </Box>
                    )
                })}
                <Stack spacing={1} direction={'row'} sx={{
                    backgroundColor: '#1A1A1A',
                    padding: '20px 16px',
                    borderRadius: '12px',
                    width: {xs:'48%',lg:'15%'},
                    textAlign: 'center',
                    color: '#B3B3B2',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        padding: '12px',
                        backgroundColor: 'black',
                        borderRadius: '50%'
                    }}>
                        <FiArrowUpRight className='w-4 h-4 lg:w-8 lg:h-8' color='#E7BEB1' />
                    </Box>
                    <Typography>
                        {t("home.section2.knowMore")}
                    </Typography>
                </Stack>
            </Stack>

        </section>
    )
}
