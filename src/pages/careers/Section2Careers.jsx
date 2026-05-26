import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaPaintBrush, FaMobileAlt, FaBullhorn, FaBriefcase } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

let list = [
    {
        id: 1,
        key: 'card1',
        icon: FaPaintBrush
    },
    {
        id: 2,
        key: 'card2',
        icon: FaMobileAlt
    },
    {
        id: 3,
        key: 'card3',
        icon: FaBullhorn
    },
    {
        id: 4,
        key: 'card4',
        icon: FaBriefcase
    }
]

export default function Section2Careers() {
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
                    fontWeight: '500'
                }}>
                    {t("careers.section2.title")}
                </Typography>
            </Stack>

            <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {list.map((el) => {
                    const IconComponent = el.icon
                    return (
                        <Box key={el.id} sx={{
                            borderRadius: '14px',
                            border: '1px solid #262626',
                            backgroundColor: '#1A1A1A',
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <Stack direction="row" sx={{
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%'
                            }}>
                                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                                    
                                    <Box sx={{
                                        border: '1px solid #262626',
                                        borderRadius: '8px',
                                        padding: '10px',
                                        backgroundColor: '#1E1E1E',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <IconComponent color='#CE7D63' size={20} />
                                    </Box>
                                    <Typography sx={{
                                        color: 'white',
                                        fontSize: '18px',
                                        fontWeight: '600'
                                    }}>
                                        {t(`careers.section2.${el.key}.title`)}
                                    </Typography>
                                </Stack>

                                
                                <Stack direction="row" spacing={0.5} sx={{
                                    alignItems: 'center',
                                    color: '#B3B3B2',
                                }}>
                                    <FiArrowUpRight size={18} />
                                    <Typography sx={{ fontSize: '12px', fontWeight: '500' }}>
                                        {t("careers.section2.viewDetails")}
                                    </Typography>
                                </Stack>
                            </Stack>

                            
                            <Stack direction="row" sx={{
                                flexWrap: 'wrap',
                                gap: '10px',
                                marginTop: '24px'
                            }}>
                                
                                <Box sx={{
                                    border: '1px solid #262626',
                                    borderRadius: '30px',
                                    padding: '6px 14px',
                                    backgroundColor: '#1E1E1E',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}>
                                    <Typography sx={{ color: '#B3B3B2', fontSize: '13px', fontWeight: '300' }}>
                                        {t(`careers.section2.${el.key}.salaryLabel`)}
                                    </Typography>
                                    <Box sx={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#CE7D63' }}></Box>
                                    <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '300' }}>
                                        {t(`careers.section2.${el.key}.salaryValue`)}
                                    </Typography>
                                </Box>

                                <Box sx={{
                                    border: '1px solid #262626',
                                    borderRadius: '30px',
                                    padding: '6px 14px',
                                    backgroundColor: '#1E1E1E',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}>
                                    <Typography sx={{ color: '#B3B3B2', fontSize: '13px', fontWeight: '300' }}>
                                        {t(`careers.section2.${el.key}.expLabel`)}
                                    </Typography>
                                    <Box sx={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#CE7D63' }}></Box>

                                    <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '300' }}>
                                        {t(`careers.section2.${el.key}.expValue`)}
                                    </Typography>
                                </Box>

                                <Box sx={{
                                    border: '1px solid #262626',
                                    borderRadius: '30px',
                                    padding: '6px 14px',
                                    backgroundColor: '#1E1E1E',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}>
                                    <Typography sx={{ color: '#B3B3B2', fontSize: '13px', fontWeight: '300' }}>
                                        {t(`careers.section2.${el.key}.deadlineLabel`)}
                                    </Typography>
                                    <Box sx={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#CE7D63' }}></Box>
                                    <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '300' }}>
                                        {t(`careers.section2.${el.key}.deadlineValue`)}
                                    </Typography>
                                </Box>
                            </Stack>

                            <Box sx={{ marginTop: '24px' }}>
                                <Typography sx={{
                                    color: 'white',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    marginBottom: '8px'
                                }}>
                                    {t("careers.section2.skillsLabel")}
                                </Typography>
                                <Typography sx={{
                                    color: '#98989A',
                                    fontSize: '14px',
                                    fontWeight: '300'
                                }}>
                                    {t(`careers.section2.${el.key}.skills`)}
                                </Typography>
                            </Box>

                            <Button sx={{
                                width: '100%',
                                backgroundColor: '#CE7D63',
                                color: 'black',
                                borderRadius: '8px',
                                padding: '14px',
                                textAlign: 'center',
                                fontWeight: '600',
                                marginTop: '24px',
                                fontSize: '17px'
                            }}>
                                {t("careers.section2.applyNow")}
                            </Button>
                        </Box>
                    )
                })}
            </Box>
        </section>
    )
}
