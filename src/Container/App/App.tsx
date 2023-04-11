import { Container, CssBaseline, StyledEngineProvider } from '@mui/material'
import NavTitle from 'Components/NavTitle/NavTitle'
import FirstTask from 'Pages/FirstTask/FirstTask'
import SecondTask from 'Pages/SecondTask/SecondTask'
import { Routes, Route } from 'react-router-dom'

type Props = {}

const links = [
    {
        path: '/FirstTask',
        title: 'FirstTask',
        Component: FirstTask,
    },
    {
        path: '/SecondTask',
        title: 'SecondTask',
        Component: SecondTask,
    },
]

const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider>
                <CssBaseline />
                <Container maxWidth="lg">
                    <NavTitle />
                    <Routes>
                        {links.map(({ path, Component }, index) => (
                            <Route
                                id={`route_${index}`}
                                path={path}
                                element={<Component />}
                                key={`route_${index}`}
                            />
                        ))}
                    </Routes>
                </Container>
            </StyledEngineProvider>
        </>
    )
}

export default App
