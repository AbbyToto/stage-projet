import { Box } from "@mui/material";

const Image = ({ image, size = "60px" }) => {
    return (
        <Box width={size} height={size}>
            <img
                style={{ objectFit: "cover", borderRadius: "50%" }}
                width={size}
                height={size}
                alt="user"
                src={`http://localhost:5000/image/${image}`}
            />
        </Box>
    );
};

export default Image;