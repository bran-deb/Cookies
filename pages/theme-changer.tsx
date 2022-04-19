import { ChangeEvent, useState } from "react";

import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

import { Layout } from "../components"


const ThemeChangerPage = () => {

    const [currentTheme, setCurrentTheme] = useState('light')

    const onThemeChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        console.log(target.value);
        setCurrentTheme(target.value)
    }


    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Tema</FormLabel>
                        <RadioGroup value={currentTheme} onChange={onThemeChange}>
                            <FormControlLabel value='light' control={<Radio />} label='light' />
                            <FormControlLabel value='dark' control={<Radio />} label='dark' />
                            <FormControlLabel value='custom' control={<Radio />} label='custom' />
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            </Card>
        </Layout>
    )
};

export default ThemeChangerPage