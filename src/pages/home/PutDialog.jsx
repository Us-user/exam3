import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function PutDialog({ openPut, setOpenPut, user, editUser }) {
    const { t } = useTranslation()

    return (
        <Dialog
            key={user?.id || 'none'}
            open={openPut}
            onClose={() => setOpenPut(false)}
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: '#1A1A1A',
                    color: '#F9EFEC',
                    borderRadius: '16px',
                    border: '1px solid #1F1F1F'
                }
            }}
        >
            <DialogTitle sx={{ color: '#F9EFEC', borderBottom: '1px solid #1F1F1F', pb: 2 }}>{t("swagger.editUser")}</DialogTitle>
            <form onSubmit={(e) => editUser(e)}>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: '320px', pt: 3 }}>
                    <TextField 
                        defaultValue={user?.name || ''} 
                        name='name' 
                        label={t("swagger.name")} 
                        required 
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: '#F9EFEC',
                                borderRadius: '10px',
                                '& fieldset': { borderColor: '#1F1F1F' },
                                '&:hover fieldset': { borderColor: '#CE7D63' },
                                '&.Mui-focused fieldset': { borderColor: '#CE7D63' },
                            },
                            '& .MuiInputLabel-root': {
                                color: '#B3B3B2',
                                '&.Mui-focused': { color: '#CE7D63' },
                            }
                        }}
                    />
                    <TextField 
                        defaultValue={user?.description || ''} 
                        name='description' 
                        label={t("swagger.description")} 
                        required 
                        multiline
                        rows={3}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: '#F9EFEC',
                                borderRadius: '10px',
                                '& fieldset': { borderColor: '#1F1F1F' },
                                '&:hover fieldset': { borderColor: '#CE7D63' },
                                '&.Mui-focused fieldset': { borderColor: '#CE7D63' },
                            },
                            '& .MuiInputLabel-root': {
                                color: '#B3B3B2',
                                '&.Mui-focused': { color: '#CE7D63' },
                            }
                        }}
                    />
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 3, pt: 1 }}>
                    <Button 
                        variant='outlined' 
                        onClick={() => setOpenPut(false)}
                        sx={{ 
                            color: '#B3B3B2', 
                            borderColor: '#1F1F1F', 
                            borderRadius: '10px', 
                            textTransform: 'none', 
                            '&:hover': { borderColor: '#B3B3B2', backgroundColor: 'rgba(255,255,255,0.05)' } 
                        }}
                    >
                        {t("swagger.cancel")}
                    </Button>
                    <Button 
                        variant='contained' 
                        type='submit'
                        sx={{ 
                            backgroundColor: '#CE7D63', 
                            color: 'white', 
                            borderRadius: '10px', 
                            textTransform: 'none', 
                            '&:hover': { backgroundColor: '#B8654D' } 
                        }}
                    >
                        {t("swagger.edit")}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}
