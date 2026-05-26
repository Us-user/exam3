import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdOutlineArrowOutward } from "react-icons/md";

let list = [
    "contact.section2.buttons.b1",
    "contact.section2.buttons.b2",
    "contact.section2.buttons.b3"
]

export default function Section2Contact() {
    const { t } = useTranslation()
    return (
        <section className='w-[90%] m-auto mt-16'>
            <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} sx={{ width: '100%', alignItems: 'stretch' }}>
                <Box sx={{
                    padding: '40px',
                    borderRadius: '12px',
                    backgroundColor: '#1A1A1A',
                    width: { xs: '100%', lg: '40%' }
                }}>
                    <Stack direction={'row'} spacing={1} sx={{
                        justifyContent: 'space-between',
                        marginBottom: '20px'
                    }}>
                        {list.map((el) => {
                            return (
                                <Button key={el} variant='outlined' sx={{
                                    color: '#B3B3B2',
                                    border: '1px solid #1F1F1F',
                                    backgroundColor: '#1F1F1F',
                                    padding: '12px'
                                }}>{t(`${el}`)}</Button>
                            )
                        })}

                    </Stack>

                    <Box sx={{
                        marginTop: '20px'
                    }}>
                        <Typography sx={{ color: '#81807E' }}>{t("contact.section2.inputs.input1")}</Typography>
                        <Stack spacing={1} direction={'row'} sx={{
                            backgroundColor: '#1F1F1F',
                            padding: '8px 10px 8px 20px',
                            marginTop: 1,
                            borderRadius: '10px 100px 100px 10px',
                            justifyContent: 'space-between',
                        }}>
                            <input type="text" placeholder='info@NexGen.com' className='w-4/5 outline-0 text-white placeholder:text-white' />
                            <Box sx={{
                                padding: '12px',
                                borderRadius: '50%',
                                border: '1px solid #333333'
                            }}><MdOutlineArrowOutward color='#E7BEB1' size={29} /></Box>

                        </Stack>
                    </Box>
                    <Box sx={{
                        marginTop: '20px'
                    }}>
                        <Typography sx={{ color: '#81807E' }}>{t("contact.section2.inputs.input2")}</Typography>
                        <Stack spacing={1} direction={'row'} sx={{
                            backgroundColor: '#1F1F1F',
                            padding: '8px 10px 8px 20px',
                            marginTop: 1,
                            borderRadius: '10px 100px 100px 10px',
                            justifyContent: 'space-between',
                        }}>
                            <input type="text" placeholder='careers@NexGen.com' className='outline-0 text-white placeholder:text-white w-4/5' />
                            <Box sx={{
                                padding: '12px',
                                borderRadius: '50%',
                                border: '1px solid #333333'
                            }}><MdOutlineArrowOutward color='#E7BEB1' size={29} /></Box>

                        </Stack>
                    </Box>
                    <Box sx={{
                        marginTop: '20px'
                    }}>
                        <Typography sx={{ color: '#81807E' }}>{t("contact.section2.inputs.input3")}</Typography>
                        <Stack spacing={1} direction={'row'} sx={{
                            backgroundColor: '#1F1F1F',
                            padding: '8px 10px 8px 20px',
                            marginTop: 1,
                            borderRadius: '10px 100px 100px 10px',
                            justifyContent: 'space-between',
                        }}>
                            <input type="text" placeholder='partnerships@NexGen.com' className='outline-0 text-white placeholder:text-white w-4/5' />
                            <Box sx={{
                                padding: '12px',
                                borderRadius: '50%',
                                border: '1px solid #333333'
                            }}><MdOutlineArrowOutward color='#E7BEB1' size={29} /></Box>

                        </Stack>
                    </Box>
                </Box>

                <Box sx={{
                    padding: '40px',
                    borderRadius: '12px',
                    backgroundColor: '#1A1A1A',
                    width: { xs: '100%', lg: '60%' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px'
                }}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ color: '#81807E' }}>
                                {t("contact.section2.form.firstNameLabel")}
                            </Typography>
                            <Stack sx={{
                                backgroundColor: '#1F1F1F',
                                padding: '16px 20px',
                                marginTop: 1,
                                borderRadius: '8px',
                                border: '1px solid #262626'
                            }}>
                                <input
                                    type="text"
                                    placeholder={t("contact.section2.form.firstNamePlaceholder")}
                                    className='outline-0 text-white placeholder:text-[#5F5E5D] bg-transparent w-full'
                                />
                            </Stack>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ color: '#81807E' }}>
                                {t("contact.section2.form.lastNameLabel")}
                            </Typography>
                            <Stack sx={{
                                backgroundColor: '#1F1F1F',
                                padding: '16px 20px',
                                marginTop: 1,
                                borderRadius: '8px',
                                border: '1px solid #262626'
                            }}>
                                <input
                                    type="text"
                                    placeholder={t("contact.section2.form.lastNamePlaceholder")}
                                    className='outline-0 text-white placeholder:text-[#5F5E5D] bg-transparent w-full'
                                />
                            </Stack>
                        </Box>
                    </Stack>

                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ color: '#81807E' }}>
                                {t("contact.section2.form.emailLabel")}
                            </Typography>
                            <Stack sx={{
                                backgroundColor: '#1F1F1F',
                                padding: '16px 20px',
                                marginTop: 1,
                                borderRadius: '8px',
                                border: '1px solid #262626'
                            }}>
                                <input
                                    type="email"
                                    placeholder={t("contact.section2.form.emailPlaceholder")}
                                    className='outline-0 text-white placeholder:text-[#5F5E5D] bg-transparent w-full'
                                />
                            </Stack>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ color: '#81807E' }}>
                                {t("contact.section2.form.phoneNumberLabel")}
                            </Typography>
                            <Stack sx={{
                                backgroundColor: '#1F1F1F',
                                padding: '16px 20px',
                                marginTop: 1,
                                borderRadius: '8px',
                                border: '1px solid #262626'
                            }}>
                                <input
                                    type="text"
                                    placeholder={t("contact.section2.form.phoneNumberPlaceholder")}
                                    className='outline-0 text-white placeholder:text-[#5F5E5D] bg-transparent w-full'
                                />
                            </Stack>
                        </Box>
                    </Stack>

                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ color: '#81807E' }}>
                            {t("contact.section2.form.messageLabel")}
                        </Typography>
                        <Stack sx={{
                            backgroundColor: '#1F1F1F',
                            padding: '16px 20px',
                            marginTop: 1,
                            borderRadius: '8px',
                            border: '1px solid #262626'
                        }}>
                            <textarea
                                rows={6}
                                placeholder={t("contact.section2.form.messagePlaceholder")}
                                className='outline-0 text-white placeholder:text-[#5F5E5D] bg-transparent w-full resize-none'
                            />
                        </Stack>
                    </Box>

                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' } }}>
                        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                            <input
                                type="checkbox"
                                id="agree"
                                className="w-5 h-5 accent-[#CE7D63] cursor-pointer"
                            />
                            <label htmlFor="agree" className="text-[#81807E] text-sm cursor-pointer select-none">
                                {t("contact.section2.form.agreeText")}
                            </label>
                        </Stack>
                        <Button
                            variant="contained"
                            endIcon={<MdOutlineArrowOutward size={20} />}
                            sx={{
                                backgroundColor: '#CE7D63',
                                color: '#1A1A1A',
                                padding: '16px 28px',
                                borderRadius: '8px',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                '&:hover': {
                                    backgroundColor: '#DA9E8B',
                                }
                            }}
                        >
                            {t("contact.section2.form.submitButton")}
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </section>
    )
}

