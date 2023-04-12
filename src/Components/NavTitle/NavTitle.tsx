import { Button, Typography } from '@mui/material'
import './NavTitle.scss'
import { NavLink } from 'react-router-dom'

const NavTitle = () => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                component="div"
                className="main_title"
            >
                <strong>
                    Examination work
                    <br />
                    of a student of group FE-27-10
                    <br />
                    Kurach Bohdan
                </strong>
            </Typography>
            <div className="btn_container_container">
                <div className="btn_container">
                    <Button variant="outlined" className="nav">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'menu-item-active' : 'menu-item'
                            }
                            to="/FirstTask"
                        >
                            Task 1
                        </NavLink>
                    </Button>
                    <Button variant="outlined" className="nav">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'menu-item-active' : 'menu-item'
                            }
                            to="/SecondTask"
                        >
                            Task 2
                        </NavLink>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default NavTitle
