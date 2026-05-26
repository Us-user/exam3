import { Avatar, Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { useTranslation } from 'react-i18next';

import l11 from '../assets/footer/l11.svg'
import l12 from '../assets/footer/l12.svg'
import l13 from '../assets/footer/l13.svg'
import l14 from '../assets/footer/l14.svg'
import FooterAccordion from './FooterAccordion.jsx';

import 'swiper/css';
import FooterSwiper from './FooterSwiper.jsx';
import FooterEnd from './FooterEnd.jsx';

export default function Footer() {
    const { t } = useTranslation();
    const [expandedPanel, setExpandedPanel] = useState(0);

    const [list, setList] = useState([
        {
            id: 1,
            titleKey: "footer.testimonials.item1.title",
            textKey: "footer.testimonials.item1.text",
            name: "Sarah Thompson",
            roleKey: "footer.testimonials.item1.role",
            avatar: l11
        },
        {
            id: 2,
            titleKey: "footer.testimonials.item2.title",
            textKey: "footer.testimonials.item2.text",
            name: "Wade Warren",
            roleKey: "footer.testimonials.item2.role",
            avatar: l12
        },
        {
            id: 3,
            titleKey: "footer.testimonials.item3.title",
            textKey: "footer.testimonials.item3.text",
            name: "Lisa Williams",
            roleKey: "footer.testimonials.item3.role",
            avatar: l13
        },
        {
            id: 4,
            titleKey: "footer.testimonials.item4.title",
            textKey: "footer.testimonials.item4.text",
            name: "Jennifer Lee",
            roleKey: "footer.testimonials.item4.role",
            avatar: l14
        }
    ]);

    const [list2, setList2] = useState([
        {
            id: 1,
            titleKey: "footer.faq.item1.title",
            descKey: "footer.faq.item1.desc"
        },
        {
            id: 2,
            titleKey: "footer.faq.item2.title",
            descKey: "footer.faq.item2.desc"
        },
        {
            id: 3,
            titleKey: "footer.faq.item3.title",
            descKey: "footer.faq.item3.desc"
        },
        {
            id: 4,
            titleKey: "footer.faq.item4.title",
            descKey: "footer.faq.item4.desc"
        },
        {
            id: 5,
            titleKey: "footer.faq.item5.title",
            descKey: "footer.faq.item5.desc"
        },
    ]);

    return (
        <footer>
            <section className='w-[90%] mx-auto p-5 rounded-3xl border-2 border-[#1F1F1F] mt-6'>
                <Stack direction={'row'} sx={{
                    padding: { xs: '30px', lg: '50px' },
                    borderRadius: '16px',
                    backgroundColor: '#1A1A1A',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{ color: '#F9EFEC', fontSize: { xs: '30px', lg: "54px" } }}>
                        {t("footer.testimonials.title")}
                    </Typography>
                    <Stack spacing={3} direction={'row'} sx={{
                        alignItems: 'center',
                        display: { xs: 'none', lg: 'flex' }
                    }}>
                        <Box sx={{ padding: '15px', border: '1px solid #262626', borderRadius: '50%' }}>
                            <GoArrowUpRight color='#E7BEB1' size={32} />
                        </Box>
                        <Typography variant='h5' sx={{ color: '#B3B3B2' }}>
                            {t("footer.testimonials.viewAll")}
                        </Typography>
                    </Stack>
                </Stack>

                <Stack spacing={3} direction={{ xs: 'column', lg: 'row' }} sx={{
                    marginTop: '24px'
                }}>
                    {list && list.map((el) => {
                        return (
                            <Box key={el.id} sx={{
                                borderRadius: '16px',
                                backgroundColor: '#1A1A1A',
                                width: { xs: '100%', lg: '24%' },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <Box sx={{
                                    padding: '34px'
                                }}>
                                    <Typography variant='h6' sx={{
                                        color: '#F9EFEC'
                                    }}>{t(el.titleKey)}</Typography>
                                    <Typography sx={{ color: '#B3B3B2', marginTop: '12px' }}>{t(el.textKey)}</Typography>
                                </Box>

                                <Stack spacing={2} direction={'row'} sx={{
                                    alignItems: 'center',
                                    backgroundColor: '#1F1F1F',
                                    padding: '12px',
                                    borderEndEndRadius: '16px',
                                    justifyItems: 'end',
                                    borderBottomLeftRadius: '16px'
                                }}>
                                    <Avatar src={el.avatar} />
                                    <Box>
                                        <Typography sx={{ color: '#F3DFD8' }}>{el.name}</Typography>
                                        <Typography sx={{ color: '#81807E' }}>{t(el.roleKey)}</Typography>
                                    </Box>

                                </Stack>

                            </Box>
                        )
                    })}
                </Stack>
            </section>

            <section className='w-[90%] mx-auto rounded-3xl border-2 border-[#1F1F1F] mt-6'>
                <Stack direction={'row'} sx={{
                    padding: { xs: '30px', lg: '40px' },
                    borderRadius: '16px',
                    backgroundColor: '#1A1A1A',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{ color: '#F9EFEC', fontSize: { xs: '30px', lg: "54px" } }}>
                        {t("footer.faq.title")}
                    </Typography>
                    <Stack spacing={3} direction={'row'} sx={{
                        alignItems: 'center',
                        display: { xs: 'none', lg: 'flex' }
                    }}>
                        <Box sx={{ padding: '15px', border: '1px solid #262626', borderRadius: '50%' }}>
                            <GoArrowUpRight color='#E7BEB1' size={32} />
                        </Box>
                        <Typography variant='h5' sx={{ color: '#B3B3B2' }}>
                            {t("footer.faq.viewAll")}
                        </Typography>
                    </Stack>
                </Stack>

                <Stack sx={{
                    padding: '20px',
                    flexDirection: { xs: 'column', lg: 'row' },
                    justifyContent: 'space-between',
                    gap: 3
                }}>
                    <Stack sx={{
                        width: { xs: '100%', lg: '60%' }
                    }}>
                        {list2 && list2.map((el) => {
                            return (
                                <FooterAccordion
                                    key={el.id}
                                    title={t(el.titleKey)}
                                    desc={t(el.descKey)}
                                    expanded={expandedPanel === el.id}
                                    onChange={(event, isExpanded) => {
                                        setExpandedPanel(isExpanded ? el.id : null);
                                    }}
                                />
                            )
                        })}
                    </Stack>

                    <Stack sx={{
                        width: { xs: '100%', lg: '35%' },
                        backgroundColor: '#1A1A1A',
                        padding: '30px',
                        borderRadius: '16px',
                        border: '1px solid #262626'
                    }}>
                        <Typography sx={{ color: '#F9EFEC', fontSize: '18px', fontWeight: '500', mb: 2 }}>
                            {t("footer.form.title")}
                        </Typography>

                        <Stack spacing={2}>
                            <Box>
                                <Typography sx={{ color: '#F9EFEC', fontSize: '12px', mb: 1, textTransform: 'uppercase' }}>
                                    {t("footer.form.nameLabel")}
                                </Typography>
                                <Box
                                    component="input"
                                    placeholder={t("footer.form.namePlaceholder")}
                                    sx={{
                                        width: '100%',
                                        padding: '16px',
                                        backgroundColor: '#111111',
                                        border: '1px solid #262626',
                                        borderRadius: '8px',
                                        color: '#F9EFEC',
                                        outline: 'none'
                                    }}
                                />
                            </Box>

                            <Box>
                                <Typography sx={{ color: '#F9EFEC', fontSize: '12px', mb: 1, textTransform: 'uppercase' }}>
                                    {t("footer.form.emailLabel")}
                                </Typography>
                                <Box
                                    component="input"
                                    placeholder={t("footer.form.emailPlaceholder")}
                                    sx={{
                                        width: '100%',
                                        padding: '16px',
                                        backgroundColor: '#111111',
                                        border: '1px solid #262626',
                                        borderRadius: '8px',
                                        color: '#F9EFEC',
                                        outline: 'none'
                                    }}
                                />
                            </Box>

                            <Box>
                                <Typography sx={{ color: '#F9EFEC', fontSize: '12px', mb: 1, textTransform: 'uppercase' }}>
                                    {t("footer.form.questionLabel")}
                                </Typography>
                                <Box
                                    component="textarea"
                                    rows={4}
                                    placeholder={t("footer.form.questionPlaceholder")}
                                    sx={{
                                        width: '100%',
                                        padding: '16px',
                                        backgroundColor: '#111111',
                                        border: '1px solid #262626',
                                        borderRadius: '8px',
                                        color: '#F9EFEC',
                                        outline: 'none',
                                        resize: 'none'
                                    }}
                                />
                            </Box>

                            <Typography sx={{
                                backgroundColor: '#CE7D63',
                                color: '#0F0F0F',
                                padding: '18px 24px',
                                borderRadius: '12px',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                textTransform: 'uppercase'
                            }}>
                                {t("footer.form.button")}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </section>

            <section className='w-[90%] mx-auto mt-6'>
                <Box sx={{
                    backgroundColor: '#CE7D63',
                    borderRadius: '24px',
                    padding: { xs: '30px 24px', lg: '60px 80px' },
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', lg: 'center' },
                    gap: 4
                }}>
                    <Stack spacing={2} sx={{ maxWidth: { xs: '100%', lg: '70%' } }}>
                        <Typography sx={{ 
                            color: '#0F0F0F', 
                            fontSize: { xs: '26px', lg: '40px' }, 
                            fontWeight: '600',
                        }}>
                            {t("footer.cta.title")}
                        </Typography>
                        <Typography sx={{ 
                            color: '#262626', 
                            fontSize: { xs: '14px', lg: '16px' },
                        }}>
                            {t("footer.cta.subtitle")}
                        </Typography>
                    </Stack>
                    <Box sx={{
                        backgroundColor: '#0F0F0F',
                        color: '#F9EFEC',
                        padding: '18px 28px',
                        borderRadius: '12px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1.5,
                        fontWeight: '600',
                        fontSize: '14px',
                        '&:hover': {
                            backgroundColor: '#1E1E1E'
                        }
                    }}>
                        {t("footer.cta.button")}
                        <GoArrowUpRight size={18} />
                    </Box>
                </Box>
            </section>

            <FooterSwiper text={'Follow Us on Social Media'}/>
            <FooterEnd/>
        </footer>
    )
}
