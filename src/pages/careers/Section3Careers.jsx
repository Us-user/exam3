import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiArrowDown } from 'react-icons/fi'

let list = [
    { 
        id: 1, 
        key: 'card1' 
    },
    { 
        id: 2, 
        key: 'card2' 
    },
    { 
        id: 3, 
        key: 'card3' 
    },
    { 
        id: 4, 
        key: 'card4' 
    },
    { 
        id: 5, 
        key: 'card5' 
    },
    { 
        id: 6, 
        key: 'card6' 
    },
    { 
        id: 7, 
        key: 'card7' 
    },
    { 
        id: 8, 
        key: 'card8' 
    }
]

export default function Section3Careers() {
    const { t } = useTranslation()
    return (
        <section className='w-[90%] m-auto border-2 border-[#1F1F1F] p-5 rounded-3xl mt-14 mb-14'>
            <Stack direction={'row'} sx={{
                padding: '30px',
                backgroundColor: '#1A1A1A',
                borderRadius: '16px',
                justifyContent: "space-between"
            }}>
                <Typography sx={{
                    fontSize: { xs: '20px', lg: '34px' },
                    color: 'white',
                }}>
                    {t("careers.section3.title")}
                </Typography>
            </Stack>

            <Box className="grid grid-cols-1  lg:grid-cols-4 gap-6 mt-6">
                {list.map((el) => {
                    return (
                        <Box key={el.id} sx={{
                            borderRadius: '14px',
                            border: '1px solid #262626',
                            backgroundColor: '#1E1E1E',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <Box sx={{
                                padding: '30px 24px 20px 24px',
                            }}>
                                <Typography sx={{
                                    color: '#98989A',
                                    fontSize: '14px',
                                }}>
                                    {t(`careers.section3.${el.key}.step`)}
                                </Typography>
                            </Box>

                            <Box sx={{
                                borderBottom: '1px solid #262626',
                                width: '100%'
                            }} />

                            <Box sx={{
                                padding: '24px',
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <Box>
                                    <Typography sx={{
                                        color: '#F9EFEC',
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        marginBottom: '16px'
                                    }}>
                                        {t(`careers.section3.${el.key}.title`)}
                                    </Typography>
                                    <Typography sx={{
                                        color: '#98989A',
                                        fontSize: '14px',
                                        marginBottom: '24px'
                                    }}>
                                        {t(`careers.section3.${el.key}.desc`)}
                                    </Typography>
                                </Box>

                                <Stack direction={'row'} spacing={1} sx={{
                                    color: '#E7BEB1',
                                    alignItems: 'center',
                                }}>
                                    <Box sx={{
                                        padding: '8px',
                                        border: '1px solid #333333',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <FiArrowDown size={16} />
                                    </Box>
                                    <Typography sx={{ fontWeight: '500', fontSize: '13px' }}>
                                        {t('careers.section3.knowMore')}
                                    </Typography>
                                </Stack>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </section>
    )
}
