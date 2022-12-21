import { Box, useTheme,Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionActions from '@mui/material/AccordionActions'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from '../../theme'


const FAQ = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="질문 페이지입니다."/>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        React는 재밌지만 또 나름 어렵네요.. 저는 언제 취업이 될까요 나이는 먹어가는데 너무 피로하네요.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Question1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        React를 정말 너무 잘하고 싶어요
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Question2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        이제 너무 부담이 됩니다.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Question3
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        열심히 한다고 했지만 생각보다 결과가 좋지 않아요
                    </Typography>
                </AccordionDetails>
            </Accordion>



            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Question4
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        취준생 여러분들 정말 화이팅입니다.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )

}

export default FAQ;