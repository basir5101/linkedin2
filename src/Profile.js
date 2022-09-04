import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Link, Modal, TextField, Typography } from '@material-ui/core';
import { Add, Edit } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

export default function Profile() {
    const user = useSelector(selectUser);
    console.log(user);
    const [userInfo, setUserInfo] = useState({
        id: 1,
        name: 'Ravi Yadav',
        email: '',
        password: '',
        accessToken: 'ieupro7834sdufspdoifjskeiruo3i45u3io4u3poius98r',
        job: 'Software Engineer',
        address: 'Mumbai, Maharashtra, India',
        connection: '500+',
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        experience: [
            {
                title: 'Frontend React Js Developer',
                company: 'doodleblue innvations - Full-time',
                time: 'July 2022 - Present - 2 mos',
            },
            {
                title: 'Associate Software Engineer',
                company: 'doodleblue innvations - Full-time',
                time: 'Jun 2020 - 2022',
            },
            {
                title: 'React Js Intern',
                company: 'doodleblue innovations',
                time: 'Nov 2021 - Present - 11 mos',
            }

        ],
        education: [
            {
                title: 'Shivajirao S. Jondhale College of Engineering',
                company: 'Bachelor of Engineering in Computer Science',
                time: '2016 - 2020',
            },
            {
                title: "S.H jondhale polytechnic",
                company: "Diploma in Computer engg",
                time: "2014-2016"
            }
        ],
        certifications: [
            {
                title: 'HTML',
                company: 'Sololearn',
                time: 'Issued Jan 2020 - No Expiration Data'
            },
            {
                title: 'C#',
                company: 'Sololearn',
                time: 'Issued Jan 2020 - No Expiration Data'
            },
        ],
        skill: [
            {
                title: 'HTML5',
            },
            {
                title: 'css3',
            },

            {
                title: 'JS',
            },
            {
                title: 'React',
            }, {
                title: 'Python',

            },
            {
                title: 'c#',
            },

        ]
    });




    const handleSkillModalOpen = () => {

    }

    // edit user 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const userDataChange = (e) => {
        const { name, value } = e.target;
        let newData = { ...userInfo };
        newData[name] = value;
        setUserInfo(newData);
    }
    const handleSave = () => {
        handleClose()
    }


    // more data handle
    const [openModal, setOpenModal] = React.useState(false);
    const [moreFormData, setMoreFormData] = React.useState({});
    const [addNewData, setAddNewData] = React.useState({
        title: "",
        company: "",
        time: ""
    })
    const handleModalOpen = (type, index, data) => {
        setAddNewData({ ...addNewData, type: type })
        if (data) {
            const newData = { ...moreFormData };
            newData.type = type;
            newData.index = index;
            newData.data = data;
            setMoreFormData(newData);
        } else {
            setMoreFormData({
                type: type,
                index: "",
                data: {
                    title: "",
                    company: "",
                    time: ""
                }
            })
        }
        setOpenModal(true);
    }
    const handleModalClose = () => setOpenModal(false);


    const handleChangeMoreData = (e) => {
        const { name, value } = e.target;
        const { type, index, } = moreFormData;
        let newData = { ...userInfo };
        if (index === "") {
            let newInfo = { ...addNewData };
            setAddNewData({ ...addNewData, [name]: value })
            newInfo[name] = value;
            newData[type] = [...newData[type], addNewData];
        } else {
            newData = { ...userInfo };
            newData[type][index][name] = value;
        }
        setUserInfo(newData);
    }
    const handleSaveMoreData = () => {
        handleModalClose()
    }

    const handleDeleteMoreData = (type, index) => {
        const newData = { ...userInfo };
        newData[type].splice(index, 1);
        //   dispatch(updateUser(newData));
        handleModalClose()
    }





    return (
        <div>
            <Box sx={{ mx: 25, backgroundColor: "white", borderRadius: "5px" }}>
                <Box sx={{ position: 'relative', paddingBottom: '25px', mb: 3 }}>

                    <Box sx={{ position: 'relative', }}>
                        <img src="https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg" width="100%" />
                        <Avatar
                            src={userInfo?.photoURL}
                            style={{ width: 150, height: 150, marginTop: "-70px", marginLeft: "15px" }}
                        >
                            {userInfo?.photoURL}
                        </Avatar>
                        <Button
                            onClick={handleOpen}
                            variant="outlined"
                            style={{
                                position: 'absolute',
                                right: 100,
                                marginTop: 5,
                                textTransform: "capitalize"

                            }}
                        >
                            Edit Profile

                        </Button>
                    </Box>
                    <Box p={3}>
                        <Typography variant='h5'> {userInfo.name} </Typography>
                        <Typography >{userInfo.job}</Typography>
                        <Box display="flex" mt={4} alignItems="center">
                            <Typography
                                color="textSecondary"
                                variant="h6"
                                fontWeight="400"
                                style={{
                                    marginRight: '3px',
                                }}
                            >
                                {userInfo.address}
                            </Typography>
                            <Typography
                                component={Link}
                                to="#"
                                fontWeight="500"
                                sx={{
                                    display: 'block',
                                    textDecoration: 'none',
                                    color: 'primary.main',
                                }}
                            >
                                Contact info
                            </Typography>
                        </Box>
                        <Typography
                            component={Link}
                            to="#"
                            fontWeight="500"
                            sx={{
                                display: 'block',
                                textDecoration: 'none',
                                color: 'primary.main',
                            }}
                        >
                            {userInfo.connection} connections
                        </Typography>
                    </Box>


                    {/* edit form  */}

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                        }}>
                            <Box
                                sx={{
                                    mt: 4,
                                }}
                            >

                                <TextField style={{ marginBottom: 5, width: '100%' }} id="outlined-basic" onChange={userDataChange} name='name' label="Name" variant="outlined" sx={{ pb: 4 }} />
                                <TextField style={{ marginBottom: 5, width: '100%' }} id="outlined-basic" onChange={userDataChange} name='job' label="Job" variant="outlined" />
                                <TextField style={{ marginBottom: 5, width: '100%' }} id="outlined-basic" onChange={userDataChange} name='address' label="Address" variant="outlined" />

                                <Button
                                    color="primary"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    onClick={handleSave}
                                    sx={{
                                        pt: '10px',
                                        pb: '10px',
                                    }}
                                >
                                    save
                                </Button>




                            </Box>
                        </Box>
                    </Modal>

                </Box>


                {/* about  */}

                <Box sx={{ position: 'relative', paddingBottom: '25px', mb: 3, border: '1px solid #E1E1E1' }}>
                    <Box p={2} display='flex' justifyContent={"space-between"}>
                        <Typography variant='h5' fontWeight={'700'}>About</Typography>

                    </Box>
                    <Box p={2}>
                        <Typography>{userInfo?.about}</Typography>
                    </Box>
                </Box>


                {/* experience  */}
                <Box sx={{ position: 'relative', paddingBottom: '25px', mb: 3, border: '1px solid #E1E1E1' }}>
                    <Box p={2} display='flex' justifyContent={"space-between"}>
                        <Typography variant='h5' fontWeight={'800'}>Experience</Typography>

                    </Box>
                    {
                        userInfo?.experience?.length > 0 &&
                        userInfo.experience.map((data, index) => (
                            <Box key={index} px={2} py={1} display="flex" alignItems="center" justifyContent={'space-between'}>
                                <Box style={{ marginLeft: 10 }} display="flex" alignItems="center">

                                    <Box
                                        style={{
                                            ml: 2,
                                            "& a": {
                                                background: 'green'
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            style={{
                                                lineHeight: '1.235',
                                                fontWeight: '600'
                                            }}
                                        >

                                            {data.title}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            style={{
                                                lineHeight: '1.235',
                                            }}
                                        >

                                            {data.company}
                                        </Typography>
                                        <Typography color="textSecondary" variant="h6" fontWeight="400">
                                            {data.time}
                                        </Typography>

                                    </Box>
                                </Box>
                                <Box>
                                    <Button
                                        onClick={() => handleModalOpen('experience', index, data)}
                                        color="secondary"
                                        variant="contained"
                                        size="small"
                                        style={{
                                            width: '30px',
                                            minWidth: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                        }}
                                    >
                                        <Edit />
                                    </Button>
                                </Box>
                            </Box>
                        ))
                    }

                </Box>

                {/* education  */}
                <Box sx={{ position: 'relative', paddingBottom: '25px', mb: 3, border: '1px solid #E1E1E1' }}>
                    <Box p={2} display='flex' justifyContent={"space-between"}>
                        <Typography variant='h5' fontWeight={'700'}>Education</Typography>

                    </Box>
                    {
                        userInfo?.education?.length > 0 &&
                        userInfo.education.map((data, index) => (
                            <Box key={index} px={2} py={1} display="flex" alignItems="center" justifyContent={'space-between'}>
                                <Box style={{ marginLeft: 10 }} display="flex" alignItems="center">

                                    <Box
                                        style={{
                                            ml: 2,
                                            "& a": {
                                                background: 'green'
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            style={{
                                                lineHeight: '1.235',
                                                fontWeight: '600'
                                            }}
                                        >

                                            {data.title}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            style={{
                                                lineHeight: '1.235',
                                            }}
                                        >

                                            {data.company}
                                        </Typography>
                                        <Typography color="textSecondary" variant="h6" fontWeight="400">
                                            {data.time}
                                        </Typography>

                                    </Box>
                                </Box>
                                <Box>
                                    <Button
                                        onClick={() => handleModalOpen('education', index, data)}
                                        color="secondary"
                                        variant="contained"
                                        size="small"
                                        style={{
                                            width: '30px',
                                            minWidth: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                        }}
                                    >
                                        <Edit />
                                    </Button>
                                </Box>
                            </Box>
                        ))
                    }

                </Box>


                {/* certifications  */}
                <Box sx={{ position: 'relative', paddingBottom: '25px', mb: 3, border: '1px solid #E1E1E1' }}>
                    <Box p={2} display='flex' justifyContent={"space-between"}>
                        <Typography variant='h5' fontWeight={'700'}>Licenses & Certifications</Typography>
                    </Box>
                    {
                        userInfo?.certifications?.length > 0 &&
                        userInfo.certifications.map((data, index) => (
                            <Box key={index} px={2} py={1} display="flex" alignItems="center" justifyContent={'space-between'}>
                                <Box style={{ marginLeft: 10 }} display="flex" alignItems="center">
                                    <Box
                                        style={{
                                            ml: 2,
                                            "& a": {
                                                background: 'green'
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            style={{
                                                lineHeight: '1.235',
                                                fontWeight: '600'
                                            }}
                                        >

                                            {data.title}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            style={{
                                                lineHeight: '1.235',
                                            }}
                                        >

                                            {data.company}
                                        </Typography>
                                        <Typography color="textSecondary" variant="h6" fontWeight="400">
                                            {data.time}
                                        </Typography>

                                    </Box>
                                </Box>
                                <Box>
                                    <Button
                                        onClick={() => handleModalOpen('certifications', index, data)}
                                        color="secondary"
                                        variant="contained"
                                        size="small"
                                        style={{
                                            width: '30px',
                                            minWidth: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                        }}
                                    >
                                        <Edit />
                                    </Button>
                                </Box>
                            </Box>
                        ))
                    }

                </Box>


                {/* More data modal */}

                <Modal
                    open={openModal}
                    onClose={handleModalClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}>
                        <Box
                            sx={{
                                mt: 4,
                            }}
                        >

                            <TextField style={{ marginBottom: 10, width: '100%' }} onChange={handleChangeMoreData} label='Title' name='title' defaultValue={moreFormData?.data?.title} id="title" variant="outlined" fullWidth />
                            <TextField style={{ marginBottom: 10, width: '100%' }} onChange={handleChangeMoreData} label='Company' name='company' defaultValue={moreFormData?.data?.company} id="company" variant="outlined" fullWidth />
                            <TextField style={{ marginBottom: 10, width: '100%' }} onChange={handleChangeMoreData} label="Time" name='time' defaultValue={moreFormData?.data?.time} id="time" variant="outlined" fullWidth />

                            <Button
                                color="secondary"
                                variant="contained"
                                size="large"
                                fullWidth
                                onClick={handleSaveMoreData}
                                sx={{
                                    pt: '10px',
                                    pb: '10px',
                                }}
                            >
                                save
                            </Button>
                            {
                                moreFormData?.data?.time && <Button
                                    color="error"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    onClick={() => handleDeleteMoreData(moreFormData.type, moreFormData.index)}
                                    sx={{
                                        pt: '10px',
                                        pb: '10px',
                                        mt: '10px'
                                    }}
                                >
                                    Delete {moreFormData.type}
                                </Button>
                            }



                        </Box>
                    </Box>
                </Modal>
            </Box>
        </div>
    )
}
