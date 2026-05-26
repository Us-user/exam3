import { Box, Button, CardMedia, Dialog, DialogContent, DialogTitle, Stack } from '@mui/material'
import React, { useRef } from 'react'
import { LuFilePlus2 } from "react-icons/lu";
import { useTranslation } from 'react-i18next'

export default function ImageModal({ setOpenImage, openImage, user, addImage, deleteImage }) {
    const ref = useRef()
    const { t } = useTranslation()
    let image_url = 'https://to-dos-api.softclub.tj/images'

    return (
        <Dialog
            open={openImage}
            onClose={() => setOpenImage(false)}
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: '#1A1A1A',
                    color: '#F9EFEC',
                    borderRadius: '16px',
                    border: '1px solid #1F1F1F'
                }
            }}
        >
            <DialogTitle sx={{ color: '#F9EFEC', borderBottom: '1px solid #1F1F1F', pb: 2 }}>{t("swagger.images")}</DialogTitle>
            <DialogContent sx={{ width: '600px', pt: 3 }}>
                <Stack direction={'row'} spacing={2} useFlexGap flexWrap="wrap" sx={{ gap: 2 }}>
                    {user?.images?.map((elem) => {
                        return (
                            <Box 
                                key={elem.id} 
                                sx={{ 
                                    position: 'relative', 
                                    width: '120px', 
                                    height: '120px', 
                                    borderRadius: '8px', 
                                    overflow: 'hidden', 
                                    border: '1px solid #1F1F1F' 
                                }}
                            >
                                <CardMedia 
                                    image={`${image_url}/${elem?.imageName}`} 
                                    sx={{ width: '100%', height: '100%' }} 
                                />
                                <Button 
                                    onClick={() => deleteImage(elem.id)}
                                    sx={{ 
                                        position: 'absolute', 
                                        bottom: 0, 
                                        left: 0, 
                                        right: 0, 
                                        backgroundColor: 'rgba(211, 47, 47, 0.85)', 
                                        color: 'white', 
                                        fontSize: '10px', 
                                        py: 0.5,
                                        textTransform: 'none',
                                        borderRadius: 0,
                                        '&:hover': { backgroundColor: 'rgb(211, 47, 47)' } 
                                    }}
                                >
                                    {t("swagger.delete")}
                                </Button>
                            </Box>
                        )
                    })}
                    <Box 
                        onClick={() => ref.current.click()}
                        sx={{ 
                            width: '120px', 
                            height: '120px', 
                            borderRadius: '8px', 
                            border: '2px dashed #1F1F1F', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            cursor: 'pointer',
                            color: '#B3B3B2',
                            '&:hover': { borderColor: '#CE7D63', color: '#CE7D63', backgroundColor: 'rgba(206, 125, 99, 0.05)' }
                        }}
                    >
                        <LuFilePlus2 size={32} />
                        <input 
                            onChange={(e) => { addImage(e); setOpenImage(false); }} 
                            type="file" 
                            multiple 
                            className='hidden' 
                            ref={ref} 
                        />
                    </Box>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}
