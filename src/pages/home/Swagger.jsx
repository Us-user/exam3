import { Box, Button, Checkbox, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaWheatAwnCircleExclamation } from 'react-icons/fa6'
import ImgSwipper from './ImgSwipper.jsx'
import AddDialog from './AddDialog.jsx'
import { Form } from 'react-router-dom'
import PutDialog from './PutDialog.jsx'
import ImageModal from './ImageModal.jsx'

export default function Swagger() {
    const { t } = useTranslation()
    const api = 'https://to-dos-api.softclub.tj/api/to-dos'
    const photo = 'https://to-dos-api.softclub.tj/images'

    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [openPut,setOpenPut]=useState(false)
    const [user,setUser]=useState([])
    const [openImage,setOpenImage]=useState(false)

    async function getUsers() {
        try {
            let { data } = await axios.get(api)
            setData(data.data)
            console.log(data.data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUsers()
    }, [])

    async function deleteUser(id) {
        try {
            await axios.delete(`${api}?id=${id}`)
            getUsers()
        } catch (error) {
            console.log(error);
        }
    }

    async function addUser(e) {
        e.preventDefault()
        let newUser=new FormData()
        newUser.append("Name",e.target.name.value)
        newUser.append('description', e.target.description.value)
        for(let i=0;i<e.target.images.files.length;i++){
            newUser.append('Images',e.target.images.files[i])
        }
        try {
            await axios.post(api,newUser)
            getUsers()
            setOpen(false)
        } catch (error) {
            console.log(error);
        }
    }

    function openModalEdit(el){
        setOpenPut(true)
        setUser(el)
    }
    async function editUser(e) {
        e.preventDefault()
        try {
            await axios.put(`${api}`,{name:e.target.name.value,description:e.target.description.value,id:user.id})
            getUsers()
            setOpenPut(false)
        } catch (error) {
            console.log(error);
        }
    }

    async function completed(id) {
        try {
            await axios.put(`https://to-dos-api.softclub.tj/completed?id=${id}`)
            getUsers()
        } catch (error) {
            console.log(error);
        }
    }

    async function addImage(e) {
        
        let form = new FormData()
        for (let i = 0; i < e.target.files.length; i++) {
            form.append('images', e.target.files[i])
        }
        try {
            await axios.post(`${api}/${user.id}/images`, form)
            await getUsers(user.id)
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteImage(id) {
        try {
            await axios.delete(`https://to-dos-api.softclub.tj/api/to-dos/images/${id}`)
            getUsers()
            setOpenImage(false)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='w-[90%] m-auto border-2 border-[#1F1F1F] p-5 rounded-3xl my-5 mb-20'>
            <Stack direction={'row'} sx={{
                alignItems: 'center',
                padding: '30px',
                backgroundColor: '#1A1A1A',
                borderRadius: '16px',
                marginBottom: '30px',
                justifyContent: "space-between"
            }}>
                <Typography variant='h4' sx={{
                    color: 'white',
                }}>{t("swagger.user")}</Typography>

                <Button 
                    variant="contained" 
                    onClick={() => setOpen(true)}
                    sx={{ 
                        backgroundColor: '#CE7D63', 
                        color: 'white', 
                        borderRadius: '12px', 
                        textTransform: 'none', 
                        px: 3, 
                        py: 1, 
                        fontWeight: '600',
                        '&:hover': { backgroundColor: '#B8654D' } 
                    }}
                >
                    {t("swagger.addUser")}
                </Button>
            </Stack>

            <Stack spacing={2} direction={'row'} sx={{ flexWrap: 'wrap', gap: 2 }}>
                {data.map((el) => {
                    return (
                        <Box key={el.id} sx={{
                            padding: '30px',
                            backgroundColor: '#1A1A1A',
                            borderRadius: '14px',
                            border: '1px solid #1F1F1F',
                            width: '300px'
                        }}>
                            <Box 
                                onClick={() => { setOpenImage(true); setUser(el); }} 
                                sx={{
                                    width: '240px',
                                    height: '240px',
                                    border: "1px solid #1F1F1F",
                                    borderRadius: '14px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    m: 'auto',
                                    '&:hover': { borderColor: '#CE7D63' }
                                }}
                            >
                                {el.images?.length > 0 ?
                                    <ImgSwipper images={el.images} /> :
                                    <Typography sx={{
                                        color: 'white',
                                        textAlign: 'center',
                                        marginTop: '100px'
                                    }}>{t("swagger.add")}</Typography>
                                }
                            </Box>

                            <Box sx={{
                                padding: '16px 0'
                            }}>
                                <Stack direction={'row'} sx={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 1
                                }}>
                                    <Box>
                                        <Typography variant='h6' sx={{
                                            color: '#F9EFEC',
                                            fontWeight: '600'
                                        }}>{el.name}</Typography>
                                    </Box>
                                    <Typography sx={{
                                        color: el.isCompleted ? "#CE7D63" : "gray",
                                        padding: '4px 12px',
                                        borderRadius: '10px',
                                        fontSize: '0.875rem',
                                        border: el.isCompleted ? "1px solid #CE7D63" : "1px solid gray",
                                        textAlign: 'center'
                                    }}>{el.isCompleted ? "Active" : "Inactive"}</Typography>
                                </Stack>
                                <Typography sx={{
                                    color: '#B3B3B2',
                                    fontSize: '0.95rem'
                                }}>{el.description}</Typography>
                            </Box>
                            <Stack direction={'row'} spacing={2} sx={{
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                mt: 2
                            }}>
                                <Button 
                                    onClick={() => deleteUser(el.id)} 
                                    variant='outlined' 
                                    color="error"
                                    sx={{ 
                                        borderRadius: '10px', 
                                        textTransform: 'none', 
                                        flex: 1,
                                        '&:hover': { backgroundColor: 'rgba(211, 47, 47, 0.04)' } 
                                    }}
                                >
                                    {t("swagger.delete")}
                                </Button>
                                <Button 
                                    onClick={() => openModalEdit(el)} 
                                    variant='contained'
                                    sx={{ 
                                        backgroundColor: '#CE7D63', 
                                        color: 'white', 
                                        borderRadius: '10px', 
                                        textTransform: 'none', 
                                        flex: 1,
                                        '&:hover': { backgroundColor: '#B8654D' } 
                                    }}
                                >
                                    {t("swagger.edit")}
                                </Button>
                                <Checkbox 
                                    onClick={() => completed(el.id)} 
                                    checked={el.isCompleted}
                                    sx={{
                                        color: '#CE7D63',
                                        '&.Mui-checked': { color: '#CE7D63' }
                                    }}
                                />
                            </Stack>

                        </Box>
                    )
                })}
            </Stack>

            <AddDialog open={open} setOpen={setOpen} addUser={addUser}/>
            <PutDialog openPut={openPut} setOpenPut={setOpenPut} user={user} editUser={editUser}/>
            <ImageModal openImage={openImage} setOpenImage={setOpenImage} user={user} addImage={addImage} deleteImage={deleteImage}/>
        </section>
    )
}
