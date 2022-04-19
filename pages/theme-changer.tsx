import { ChangeEvent, useEffect, useState } from "react";

import { GetServerSideProps, NextPage } from 'next'

import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import Cookies from 'js-cookie'

import { Layout } from "../components"


const ThemeChangerPage: NextPage = (props) => {
    console.log({ props });


    const [currentTheme, setCurrentTheme] = useState('light')

    const onThemeChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const selectedTheme = target.value

        console.log(selectedTheme);
        setCurrentTheme(selectedTheme)

        localStorage.setItem('theme', selectedTheme) //capacidad hasta 5 mb
        Cookies.set('theme', selectedTheme)          //capacidad hasta 4kb
    }

    useEffect(() => {
        console.log('LocalStorage', localStorage.getItem('theme'));
        // axios.post('/api/help',{localStorage.getItem('theme')})  //con localStorage se manda manual la info al backend
        //cookies lo manda por la request al backend
    }, []);


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



// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    //toma las cookies por la request
    const { theme = 'light', name = 'No name' } = req.cookies

    return {
        props: {
            theme,
            name
        }
    }
}


export default ThemeChangerPage