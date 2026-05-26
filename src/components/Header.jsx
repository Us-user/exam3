import React from 'react'
import logo from '../assets/Logo.svg'
import { Box, Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiMenuAlt3 } from "react-icons/hi";

const naw = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "About us", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Blog", path: "/blogs" },
  { title: "Careers", path: "/careers" },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getTranslationKey = (title) => {
    if (title === "About us") return "about";
    return title.toLowerCase();
  };

  const LanguageSelector = ({ mobile = false }) => (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#0F0F0F',
      borderRadius: mobile ? '10px' : '12px',
      padding: mobile ? '6px 12px' : '10px 18px',
      gap: mobile ? 1 : 1.5,
      border: '1px solid #262626'
    }}>
      <Typography
        onClick={() => changeLanguage('en')}
        sx={{
          color: currentLang.startsWith('en') ? '#E7BEB1' : '#81807E',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: mobile ? '13px' : '14px',
          userSelect: 'none'
        }}
      >
        EN
      </Typography>
      <Typography sx={{ color: '#81807E', fontSize: mobile ? '13px' : '14px', userSelect: 'none' }}>/</Typography>
      <Typography
        onClick={() => changeLanguage('ru')}
        sx={{
          color: currentLang.startsWith('ru') ? '#E7BEB1' : '#81807E',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: mobile ? '13px' : '14px',
          userSelect: 'none'
        }}
      >
        RU
      </Typography>
    </Box>
  );

  return (
    <header className='bg-[#1A1A1A] rounded-2xl w-[90%] mx-auto p-5 my-3'>
      <Stack direction={'row'} sx={{
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box component={'img'} src={logo} />

        <Stack direction="row" spacing={1.5} sx={{ display: { xs: 'flex', lg: 'none' }, alignItems: 'center' }}>
          <LanguageSelector mobile />
          <Box sx={{
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: '#0F0F0F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <HiMenuAlt3 color='white' size={32} />
          </Box>
        </Stack>

        <Stack spacing={2} direction={'row'} sx={{
          display: { xs: 'none', lg: 'flex' },
          alignItems: 'center'
        }}>
          <Stack spacing={2} direction={'row'}>
            {naw.map((el, index) => {
              return (
                <NavLink
                  key={index}
                  to={el.path}
                  style={({ isActive }) => ({
                    backgroundColor: '#0F0F0F',
                    borderRadius: '12px',
                    padding: '18px 24px',
                    color: isActive ? '#E7BEB1' : '#81807E',
                    textDecoration: 'none'
                  })}
                >
                  {t(`header.nav.${getTranslationKey(el.title)}`)}
                </NavLink>
              );
            })}
          </Stack>
          <NavLink to={'/contact'}>

            <Typography sx={{
              backgroundColor: '#CE7D63',
              color: '#0F0F0F',
              padding: '18px 24px',
              borderRadius: '12px',
              fontWeight: 500
            }}>{t('header.contactUs')}</Typography>
          </NavLink>

          <LanguageSelector />
        </Stack>
      </Stack>
    </header>
  )
}
