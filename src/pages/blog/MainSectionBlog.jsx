import React from 'react'

import b2 from '../../assets/blog/b2.svg'
import b3 from '../../assets/blog/b3.svg'
import b4 from '../../assets/blog/b4.svg'
import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { MdOutlineArrowOutward } from "react-icons/md";

let list = [
    {
        id: 1,
        img: b2,
        title: "blog.box.b1.title",
        desc: "blog.box.b1.desc",
    },
    {
        id: 2,
        img: b3,
        title: "blog.box.b2.title",
        desc: "blog.box.b2.desc",
    },
    {
        id: 3,
        img: b4,
        title: "blog.box.b3.title",
        desc: "blog.box.b3.desc",
    }
]

export default function MainSectionBlog() {
    const { t } = useTranslation()
    return (
        <Stack sx={{
            flexDirection: { xs: 'column', lg: 'row' },
            marginTop: '20px',
            justifyContent: 'space-between',
            gap:{xs:'8px',lg:0}
        }}>
            {list.map((el) => {
                return (
                    <Box sx={{
                        borderRadius: '16px',
                        padding: '16px 16px 30px 16px',
                        backgroundColor: '#1A1A1A',
                        width: {xs:'100%',lg:'32%'}
                    }}>
                        <img src={el.img} alt="" />
                        <Box sx={{
                            padding: '16px'
                        }}>
                            <Typography variant='h6' sx={{
                                color: '#F9EFEC'
                            }}>{t(`${el.title}`)}</Typography>

                            <Typography sx={{ color: '#B3B3B2', marginTop: '20px' }}>{t(`${el.desc}`)}</Typography>

                            <Stack spacing={1} direction={'row'} sx={{
                                alignItems: 'center',
                                marginTop:'30px'
                            }}>
                                <Box sx={{ border: '1px solid #333333', padding: '10px', backgroundColor: '#1F1F1F', borderRadius: '50%' }}><MdOutlineArrowOutward color='#E7BEB1' size={26} /></Box>
                                <Typography sx={{ color: '#B3B3B2' }}>{t("blog.read")}</Typography>
                            </Stack>
                        </Box>
                    </Box>
                )
            })}
        </Stack>
    )
}
