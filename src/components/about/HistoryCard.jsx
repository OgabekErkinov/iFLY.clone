import { Box, Link, Stack, Typography } from '@mui/material'
import { useResponsive } from '../sizes/screen'
import { useEffect } from 'react'
import Aos from 'aos'
import { useTranslation } from 'react-i18next';

const HistoryCard = () => {
    const {smScreen, mdScreen, lgScreen} = useResponsive()
    const sizeFont = smScreen ? '12px' : mdScreen ? '14px' : '16px'
    const {t} = useTranslation()
    useEffect(()=>{
        Aos.init({
            duration : 1000,
            delay : 500
        })
    },[])
  return (
    <Box width='90%' height={mdScreen ? '25rem' : '15rem'} data-aos = 'fade-up' mt='4rem' mx='auto' borderRadius='0.5rem' bgcolor='#FFFFFF'>
        <Stack height='100%' width='90%' direction={mdScreen ? 'column' : 'row'} 
               justifyContent='space-between' alignItems='center' gap='0.2rem'>
                
                <Box height={mdScreen ? '60%' : '100%'} width={mdScreen ? '100%' : '30%'} 
                     overflow='hidden' display='flex' justifyContent='center' alignItems='center'>
                <Box component='img' src="https://www.ifly.com.uz/assets/logo-BPA5zOgc.png" alt="image" 
                     style={{height : mdScreen ? '200%' : '80%', width : '60%', margin : '0 auto', 
                             transform : mdScreen ? 'scale(1.5) translateX(1rem)' : 'scale(1)'}}/>
                </Box>
               
           
            <Stack height={mdScreen ? '60%' : '100%'} width='80%' p='8px' 
                   justifyContent='center' gap={mdScreen ? '0' : '1rem'} >
              <Typography fontFamily='Poppins' fontWeight='600' fontSize='12px' textTransform='uppercase'>
                 {t("OurHistory")}
              </Typography>
              <Typography fontFamily='Poppins' mt='1rem' color='gray' width={mdScreen ? '100%' : '90%'} fontSize={sizeFont}>
                 {t("AboutHistory")}
              </Typography>
              <Box width='100%' textAlign='start'>
                <Link href = '#'>
                  <Typography fontWeight='600' fontFamily='Poppins' fontSize='12px'>
                        {t("Info")} →
                  </Typography>
                </Link>
               </Box>

            </Stack>

        </Stack>
    </Box>
  )
}

export default HistoryCard
