import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';

const socials = [
    { key: 'instagram', icon: <FaInstagram size={20} /> },
    { key: 'twitter', icon: <FaTwitter size={20} /> },
    { key: 'dribbble', icon: <FaDribbble size={20} /> },
    { key: 'behance', icon: <FaBehance size={20} /> }
];

const linkSections = [
    {
        titleKey: 'footer.footerEnd.links.home.title',
        items: [
            { key: 'why', translationKey: 'footer.footerEnd.links.home.why' },
            { key: 'about', translationKey: 'footer.footerEnd.links.home.about' },
            { key: 'testimonials', translationKey: 'footer.footerEnd.links.home.testimonials' },
            { key: 'faq', translationKey: 'footer.footerEnd.links.home.faq' }
        ]
    },
    {
        titleKey: 'footer.footerEnd.links.services.title',
        items: [
            { key: 'webDev', translationKey: 'footer.footerEnd.links.services.webDev' },
            { key: 'appDev', translationKey: 'footer.footerEnd.links.services.appDev' },
            { key: 'webDesign', translationKey: 'footer.footerEnd.links.services.webDesign' },
            { key: 'marketing', translationKey: 'footer.footerEnd.links.services.marketing' }
        ]
    },
    {
        titleKey: 'footer.footerEnd.links.projects.title',
        items: [
            { key: 'klothink', translationKey: 'footer.footerEnd.links.projects.klothink' },
            { key: 'zenith', translationKey: 'footer.footerEnd.links.projects.zenith' },
            { key: 'novus', translationKey: 'footer.footerEnd.links.projects.novus' },
            { key: 'apex', translationKey: 'footer.footerEnd.links.projects.apex' }
        ]
    },
    {
        titleKey: 'footer.footerEnd.links.blogs.title',
        items: [
            { key: 'business', translationKey: 'footer.footerEnd.links.blogs.business' },
            { key: 'design', translationKey: 'footer.footerEnd.links.blogs.design' },
            { key: 'dev', translationKey: 'footer.footerEnd.links.blogs.dev' }
        ]
    }
];

export default function FooterEnd() {
    const { t } = useTranslation();

    return (
        <section className='w-[90%] mx-auto mt-12 pb-2'>
            <Stack
                direction={{ xs: 'column', lg: 'row' }}
                spacing={{ xs: 6, lg: 4 }}
                sx={{ justifyContent: 'space-between', alignItems: 'stretch', mb: 8 }}
            >

                <Box sx={{
                    width: { xs: '100%', lg: '38%' },
                    display: { xs: 'flex', lg: 'grid' },
                    flexDirection: { xs: 'row', lg: 'unset' },
                    justifyContent: { xs: 'center', lg: 'unset' },
                    gap: 2,
                    gridTemplateColumns: { lg: '1fr 1fr' },
                    backgroundColor: { xs: '#1A1A1A', lg: 'transparent' },
                    border: { xs: '1px solid #262626', lg: 'none' },
                    borderRadius: { xs: '16px', lg: 'none' },
                    padding: { xs: '20px', lg: '0' }
                }}>
                    {socials.map((social) => (
                        <Box
                            key={social.key}
                            sx={{
                                backgroundColor: { xs: '#1E1E1E', lg: '#1A1A1A' },
                                border: '1px solid #262626',
                                borderRadius: { xs: '50%', lg: '16px' },
                                width: { xs: '52px', lg: '100%' },
                                height: { xs: '52px', lg: 'auto' },
                                padding: { xs: '0', lg: '30px' },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: { xs: 'center', lg: 'space-between' },
                                alignItems: { xs: 'center', lg: 'stretch' },
                                cursor: 'pointer',
                                transition: 'border-color 0.2s',
                                '&:hover': { borderColor: '#333' }
                            }}
                        >
                            <Stack
                                direction="row"
                                sx={{
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    display: { xs: 'none', lg: 'flex' },
                                    width: '100%'
                                }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '44px',
                                    height: '44px',
                                    backgroundColor: '#1E1E1E',
                                    border: '1px solid #262626',
                                    borderRadius: '10px',
                                    color: '#CE7D63'
                                }}>
                                    {social.icon}
                                </Box>
                                <Box sx={{
                                    borderRadius: '50%',
                                    border: '1px solid #262626',
                                    padding: '10px'
                                }}>
                                    <GoArrowUpRight color='#81807E' size={16} />
                                </Box>
                            </Stack>

                            <Box sx={{
                                display: { xs: 'flex', lg: 'none' },
                                color: '#CE7D63',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {social.icon}
                            </Box>

                            <Box sx={{ display: { xs: 'none', lg: 'block' }, mt: 3 }}>
                                <Typography sx={{ color: '#F9EFEC', fontSize: '18px', fontWeight: '500', mb: 0.5 }}>
                                    {t(`footer.footerEnd.socials.${social.key}.title`)}
                                </Typography>
                                <Typography sx={{ color: '#81807E', fontSize: '13px', lineHeight: 1.4 }}>
                                    {t(`footer.footerEnd.socials.${social.key}.desc`)}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                <Stack sx={{ width: { xs: '100%', lg: '58%' } }} spacing={4}>

                    <Box sx={{
                        backgroundColor: '#1A1A1A',
                        border: '1px solid #262626',
                        borderRadius: '16px',
                        padding: '30px',
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
                        gap: 4
                    }}>
                        {linkSections.map((section) => (
                            <Stack key={section.titleKey} spacing={2}>
                                <Typography sx={{ color: '#F9EFEC', fontSize: '16px', fontWeight: '600' }}>
                                    {t(section.titleKey)}
                                </Typography>
                                <Stack spacing={1.5}>
                                    {section.items.map((item) => (
                                        <Typography
                                            key={item.key}
                                            sx={{
                                                color: '#81807E',
                                                fontSize: '14px',
                                            }}
                                        >
                                            {t(item.translationKey)}
                                        </Typography>
                                    ))}
                                </Stack>
                            </Stack>
                        ))}
                    </Box>

                    <Box sx={{
                        backgroundColor: '#1A1A1A',
                        border: '1px solid #262626',
                        borderRadius: '16px',
                        padding: '30px',
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { xs: 'stretch', lg: 'center' },
                        gap: 3
                    }}>
                        <Stack spacing={0.5}>
                            <Typography sx={{ color: '#81807E', fontSize: '12px', fontWeight: '500', letterSpacing: '1px' }}>
                                {t("footer.footerEnd.newsletter.label")}
                            </Typography>
                            <Typography sx={{ color: '#F9EFEC', fontSize: { xs: '18px', lg: '22px' }, fontWeight: '600' }}>
                                {t("footer.footerEnd.newsletter.title")}
                            </Typography>
                        </Stack>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid #262626',
                            paddingBottom: '8px',
                            flex: { xs: 'none', lg: 0.8 },
                            maxWidth: { xs: '100%', lg: '360px' }
                        }}>
                            <Box
                                component="input"
                                placeholder={t("footer.footerEnd.newsletter.placeholder")}
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    color: '#F9EFEC',
                                    width: '80%',
                                    padding: '8px 0',
                                    outline: 'none',
                                    fontSize: '14px',
                                    '&::placeholder': { color: '#59595A' }
                                }}
                            />
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#333333',
                                border: '1px solid #262626',
                                borderRadius: '50%',
                                color: '#CE7D63',
                            }}>
                                <GoArrowUpRight size={18} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        backgroundColor: '#1A1A1A',
                        border: '1px solid #262626',
                        borderRadius: '16px',
                        padding: { xs: '24px 20px', lg: '24px 30px' },
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        gap: { xs: 2.5, lg: 2 }
                    }}>
                        <Typography sx={{ color: '#81807E', fontSize: { xs: '14px', lg: '13px' }, order: 1 }}>
                            {t("footer.footerEnd.copyright")}
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', lg: 'row' },
                            alignItems: 'center',
                            gap: { xs: 2.5, lg: 3 },
                            width: { xs: '100%', lg: 'auto' },
                        }}>
                            <Typography sx={{ color: '#81807E', fontSize: { xs: '14px', lg: '13px' } }}>
                                {t("footer.footerEnd.terms")}
                            </Typography>

                            <Box sx={{
                                display: { xs: 'block', lg: 'none' },
                                width: '100%',
                                height: '1px',
                                backgroundColor: '#262626'
                            }} />

                            <Typography sx={{ color: '#81807E', fontSize: { xs: '14px', lg: '13px' } }}>
                                {t("footer.footerEnd.privacy")}
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </section>
    );
}
