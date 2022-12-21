import { Box,useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import GeoGraphyChart from "../../components/GeoGraphyChart";

const GeoGraphy = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
        return(
            <Box m="20px">
                <Header title="GeoGraphy Chart" subtitle="간단한 지도차트"/>
                <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                    <GeoGraphyChart/>
                </Box>
            </Box>
        )
};

export default GeoGraphy;