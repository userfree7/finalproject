import { TableFooter } from '@mui/material'
import Logo from 'components/Logo/Logo'
import TableCell from '@mui/material/TableCell'
import { Container } from '@mui/material'
type Props = {}
const Footer = (props: Props) => {
    return (
        <div>
            <Container>
                <TableFooter>
                    <TableCell>
                        <Logo />
                    </TableCell>
                    <TableCell>
                        Йога, медітація, свідомий спосіб життя, люди, які
                        надихають, події, які змінюють твій світ.
                    </TableCell>{' '}
                    <TableCell>Copyright 2023</TableCell>
                </TableFooter>
            </Container>
        </div>
    )
}
export default Footer
