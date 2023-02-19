import { Stack } from "@mui/system";
import { useState } from "react"

export const ImageImport = () => {
    const [baseImage, setBaseImage] = useState("");
    const uploadImage = async (e: any) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(
            typeof base64 === 'string'
                ? base64 : ''
        );
    };


const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};


    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <input
                    type="file"
                    onChange={(e) => {
                        uploadImage(e);
                    }}
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <img src={baseImage} height="200px" />
            </Stack>
        </Stack>
    );
}