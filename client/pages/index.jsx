import React,{useEffect} from "react";
import Head from 'next/head'
import {Flex, Box, Container, Center,Highlight,Badge,SimpleGrid, Grid, GridItem,Divider,Text, AspectRatio, Button, Image, VStack, Stack, HStack, Link, Heading} from '@chakra-ui/react';
import { Card, CardHeader , CardBody, CardFooter } from '@chakra-ui/card'
import {ButtonGroup} from '@chakra-ui/button'
import Carousel from '../components/Carousel'
import Testimonials from '../components/Testimonials'
import anime from "animejs"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Loading from '../pages/loading'
import { Suspense } from "react";

export default function Home() {
  const wave1 = "M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z"
		const wave2 = "M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z"
		const wave3 = "M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z"
		const wave4 = "M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z"
		useEffect(() =>{
		anime({
		targets: '.wave-top > path',
		easing: 'linear',
		duration: 3000,
		loop: true,
		d: [
			{ value: [wave1, wave2] },
			{ value: wave3 },
			{ value: wave4 },
			{ value: wave1 },
		],
		});
	},[]);

  return (
    <Box >
     
      <Flex  as="main" role="main" direction={{ sm: 'column', md: 'row', lg: 'row'  }} >
            {/* HERO TITLE */}
            <Suspense fallback={<Loading/>}>
            <Flex  p={20} direction={{ xs:'column', sm: 'column', md: 'row', lg: 'row'  }} bgColor="#FEDADA" display="flex" >
              <Box justify={{sm:"center", md:"start"}}  align={{xs:'center',sm:"center", md:"start"}} >
                <Heading data-aos="zoom-in" as='h1' textAlign={{base:"center", md:"start"}} fontSize={{xs:"40",sm:90,md:70,lg:100}} color="#BC2973" >Be the Best version of yourself</Heading>
                <Text textAlign={{base:"center", md:"start"}} color="gray.600" fontSize={{xs:12, sm:15,md:18,lg:20}} mt={5}>We are committed to providing the highest quality and certified skin care products and customer service.</Text>
                {/* Social Media Links */}
                  <Flex direction="row" justify={{sm:"center", md:"start"}} align="center" mt={10} >
                    <Link href="https://www.facebook.com/aubreycurations"><Image m={2} src="images/Facebook.png" alt="Facebook" boxSize={50} /></Link>
                    <Link href="https://www.instagram.com/aubreyapproves/"><Image m={2} src="images/Instagram.png" alt="instagram logo" boxSize={50}/></Link>
                    <Link href="https://www.tiktok.com/@aubreyscurations"><Image m={2} src="images/tik.png" alt="instagram logo" boxSize={50}/></Link>
                  </Flex>
                  <Flex justify={{xs:"center",sm:"center", md:"start"}}>
                    <Button p={6} mt={10} size="2xl" background="#BC2973" color="white"><Link href="/products">Shop Now</Link></Button>            
                  </Flex> 
                </Box>
                <Box >
                <Image display={{xs:'none', sm:'none', md:'flex', lg: 'flex'}} src="images/Hero.png" w={{sm:400, md:500, lg:600}} w={{sm:400, md:500, lg:600}}/>
                </Box>
            </Flex>
            </Suspense>
      </Flex>  
    
      <Flex  data-aos="zoom-in" direction="column" justify="center" align="center">
        <Heading textAlign="center" p={20} mb={10} fontSize="7xl" textShadow="gray  2px 2px 2px"color="#BC2973">Latest News</Heading>       
        <Carousel/>
      </Flex>
    
      <Flex h="full"  w='100%' pb={10} direction="column" background="#BC2973" justify="center">
      <Flex w='100%'>
          <svg className="wave-top" width="100vw" viewBox="0 50 1000 250"> 
  				    <path fillRule="evenodd" clipRule="evenodd" d="M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V-8.5451e-06H1150C1100 -8.5451e-06 1000 -8.5451e-06 900 -8.5451e-06C800 -8.5451e-06 700 -8.5451e-06 600 -8.5451e-06C500 -8.5451e-06 400 -8.5451e-06 300 -8.5451e-06C200 -8.5451e-06 100 -8.5451e-06 50 -8.5451e-06H0V108.306Z" fill="#FEDADA"/>
		   	   </svg>
      </Flex> 
        <Heading p={10} color="white" textAlign="center" fontSize={{sm:35,md:40,lg:60}}>Featured Products</Heading>
        <Flex  direction="column" justify="center" align="center">
          <SimpleGrid p={10} columns={[1, 1, 1, 3]} spacing="40px">
            <Card data-aos="fade-down " background="white" p={10} boxShadow='lg'borderRadius="lg" maxW="sm">
                  <CardBody p={2}>  
                        <Image src="/images/product.JPG" borderRadius="lg" alt="rosmar-soap-1" w="300px"/>
                        <Stack mt='6' spacing='3'>
                          <Text color='pink.600' fontStyle="bold" fontSize='2xl'>Rosmar Kagayaku Soap</Text>
                          <Text fontSize="sm">
                              This soap is perfect for every skin.
                            </Text>
                            <Text color='pink.200' fontSize='2xl'>
                              PHP450
                            </Text>
                        </Stack>
                  </CardBody> 
                  <Divider />
                  <CardFooter>
                    <ButtonGroup mt={3} spacing='2'>
                      <Button variant='solid' colorScheme='pink'>
                        Buy now
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
            </Card>

            <Card data-aos="fade-down " background="white" p={10} boxShadow='lg'borderRadius="lg" maxW="sm">
                  <CardBody p={2}>  
                        <Image src="/images/product2.JPG" borderRadius="lg" alt="rosmar-soap-1" w="300px"/>
                        <Stack mt='6' spacing='3'>
                          <Text color='pink.600' fontStyle="bold" fontSize='2xl'>Rosmar Kagayaku Soap</Text>
                          <Text fontSize="sm">
                              This soap is perfect for every skin.
                            </Text>
                            <Text color='red.500' fontSize='2xl'>
                              PHP450
                            </Text>
                        </Stack>
                  </CardBody> 
                  <Divider />
                  <CardFooter>
                    <ButtonGroup mt={3} spacing='2'>
                      <Button variant='solid' colorScheme='pink'>
                        Buy now
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
            </Card>

            <Card data-aos="fade-down " background="white" p={10} boxShadow='lg'borderRadius="lg" maxW="sm">
                  <CardBody p={2}>  
                        <Image src="/images/product3.JPG" borderRadius="lg" alt="rosmar-soap-1" w="300px"/>
                        <Stack mt='6' spacing='3'>
                          <Text color='pink.600' fontStyle="bold" fontSize='2xl'>Rosmar Kagayaku Soap</Text>
                          <Text fontSize="sm">
                              This soap is perfect for every skin.
                            </Text>
                            <Text color='red.500' fontSize='2xl'>
                              PHP450
                            </Text>
                        </Stack>
                  </CardBody> 
                  <Divider />
                  <CardFooter>
                    <ButtonGroup mt={3} spacing='2'>
                      <Button variant='solid' colorScheme='pink'>
                        Buy now
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
            </Card>

            <Card data-aos="fade-down " background="white" p={10} boxShadow='lg'borderRadius="lg" maxW="sm">
                  <CardBody p={2}>  
                        <Image src="/images/product4.JPG" borderRadius="lg" alt="rosmar-soap-1" w="300px"/>
                        <Stack mt='6' spacing='3'>
                          <Text color='pink.600' fontStyle="bold" fontSize='2xl'>Rosmar Kagayaku Soap</Text>
                          <Text fontSize="sm">
                              This soap is perfect for every skin.
                            </Text>
                            <Text color='red.500' fontSize='2xl'>
                              PHP450
                            </Text>
                        </Stack>
                  </CardBody> 
                  <Divider />
                  <CardFooter>
                    <ButtonGroup mt={3} spacing='2'>
                      <Button variant='solid' colorScheme='pink'>
                        Buy now
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
            </Card>

            <Card data-aos="fade-down " background="white" p={10} boxShadow='lg'borderRadius="lg" maxW="sm">
                  <CardBody p={2}>  
                        <Image src="/images/product5.JPG" borderRadius="lg" alt="rosmar-soap-1" w="300px"/>
                        <Stack mt='6' spacing='3'>
                          <Text color='pink.600' fontStyle="bold" fontSize='2xl'>Rosmar Kagayaku Soap</Text>
                          <Text fontSize="sm">
                              This soap is perfect for every skin.
                            </Text>
                            <Text color='red.500' fontSize='2xl'>
                                PHP450
                            </Text>
                        </Stack>
                  </CardBody> 
                  <Divider />
                  <CardFooter>
                    <ButtonGroup mt={3} spacing='2'>
                      <Button variant='solid' colorScheme='pink'>
                        Buy now
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
            </Card>

            <Card data-aos="fade-down " background="white" p={10} boxShadow='lg'borderRadius="lg" maxW="sm">
                  <CardBody p={2}>  
                        <Image src="/images/product6.JPG" borderRadius="lg" alt="rosmar-soap-1" w="300px"/>
                        <Stack mt='6' spacing='3'>
                          <Text color='pink.600' fontStyle="bold" fontSize='2xl'>Rosmar Kagayaku Soap</Text>
                          <Text fontSize="sm">
                              This soap is perfect for every skin.
                            </Text>
                            <Text color='red.500' fontSize='2xl'>
                              PHP450
                            </Text>
                        </Stack>
                  </CardBody> 
                  <Divider />
                  <CardFooter>
                    <ButtonGroup mt={3} spacing='2'>
                      <Button variant='solid' colorScheme='pink'>
                        Buy now
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
            </Card>
        
        </SimpleGrid>
        <Flex justify="center">
          <Button p={6} mt={10} size="2xl"><Link href="/products">More Products</Link></Button>            
        </Flex>  
      </Flex>
      </Flex> 
         
      <Flex >
        <svg className="wave-top" width="100vw" viewBox="0 50 1000 250"> 
  				  <path fillRule="evenodd" clipRule="evenodd" d="M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V-8.5451e-06H1150C1100 -8.5451e-06 1000 -8.5451e-06 900 -8.5451e-06C800 -8.5451e-06 700 -8.5451e-06 600 -8.5451e-06C500 -8.5451e-06 400 -8.5451e-06 300 -8.5451e-06C200 -8.5451e-06 100 -8.5451e-06 50 -8.5451e-06H0V108.306Z" fill="#BC2973"/>
		   </svg>
      </Flex> 
       
      <Flex p={10} display="flex" direction='column' h="full" align="center" justify="center" >
        <Heading fontSize={{xs:40,sm:50,md:60,lg:80}} aos-data="fade-up" p={20} justify="center" align="center" color="gray.700">Our Trusted Partners</Heading>
      </Flex> 
      <Flex align="center" justify="space-around" direction={{base:"column",sm:"column",lg:"row"}}>
              <Image data-aos="fade-up" p={2} data-aos-duration="500" src="/images/rosmar.png" alt="rosmar-logo" h='200px' />
              <Image data-aos="fade-up" p={2} data-aos-duration="1500" src="/images/psph.png" alt="rosmar-logo" h="50"  />
              <Image data-aos="fade-up" p={2} data-aos-duration="1800" src="/images/gluta.png" alt="rosmar-logo" boxSize='100px'/>
              <Image data-aos="fade-up" p={2} data-aos-duration="2000" src="/images/brilliant.png" alt="rosmar-logo" h="100" />
              <Image data-aos="fade-up" p={2}  data-aos-duration="2300" src="/images/fairy.png" alt="rosmar-logo" boxSize='300px'/>
      </Flex>
     
      <Flex p={20} mt={10} display="flex" direction={{base:"column", sm:"column", md:"column",lg:"row"}} align="center" justify="space-around" >
                  <Image align={{sm:"center", md:"center"}}data-aos="fade-down"src="/images/delivery.png" alt="delivery truck"></Image>
                  <Stack align={{sm:"center", md:"center"}} p={10} maxW='lg' >
                  
                    <Heading textAlign={{sm:"center", md:"center"}} mt={2} color="#BC2973" >Delivery is safe and secure</Heading>
                    <Text align={{sm:"center", md:"center"}}mt={20}>A bundle of 210+ ready-to-use, responsive and accessible components with clever structured sourcode files</Text>
                    <Button align={{sm:"center", md:"center"}} mt={20} w="200px" p={4} size="2xl"><Link href="/products">Order Now</Link></Button>  
              
                  </Stack>
      </Flex>
        
      <Flex mt={2} p={10} display="flex" direction="column" align="center" justify="center">
        <Box p={2} justify="center" align="center">
          <Image src="/images/Pretty Woman.png" alt="woman"/>
          <Heading color="#BC2973" >Why Aubrey Curations?</Heading>
          <Text color="#BC2973"  mt={5}>Because this beautiful and responsive React components will help your to realize your next project in no time.</Text>
        </Box> 
        <Box p={2} direction={{sm:"column",md:'row',lg:"row"}} justify="space-around" align="center">
          <Image data-aos="zoom-out" src="/images/map.png" alt="philippines map" h={{ xs:200, sm: 300, md: 500, lg:550 }}/> 
          <SimpleGrid  columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            <Box boxShadow='2xl' rounded={'lg'} p={5} background="#BC2973">
              <Text as='b' color="#FFFFFF" fontSize="5xl">100</Text>
              <Text color="#FFFFFF" >Affiliates</Text>
            </Box>
            <Box boxShadow='2xl' rounded={'lg'} p={5} background="#BC2973">
              <Text as='b' color="#FFFFFF"  fontSize="5xl">500</Text>
              <Text color="#FFFFFF" >Serve</Text>
            </Box>
            <Box boxShadow='2xl' rounded={'lg'} p={5} background="#BC2973">
              <Text as='b' color="#FFFFFF"  fontSize="5xl">#1</Text>
              <Text color="#FFFFFF" >Certified Distributor</Text>
            </Box>
            <Box boxShadow='2xl' rounded={'lg'} p={5} background="#BC2973">
              <Text as='b'color="#FFFFFF"  fontSize="5xl">150+</Text>
              <Text color="#FFFFFF" >Cities</Text>
            </Box>
            <Box boxShadow='2xl' rounded={'lg'} p={5} background="#BC2973">
              <Text as='b' color="#FFFFFF"  fontSize="5xl">1,000</Text>
              <Text color="#FFFFFF" >Per Day</Text>
            </Box>
            <Box boxShadow='2xl' rounded={'lg'} p={5}  background="#BC2973" >
              <Text as='b' color="#FFFFFF"  fontSize="5xl">1,000</Text>
              <Text color="#FFFFFF" >Serve</Text>
            </Box>
          </SimpleGrid>
        </Box>
       

      </Flex>

      <Flex p={10} display="flex" direction="column" justify="flex-start">
        <Testimonials/>
      </Flex> 
      <Flex  p={20} background="#BC2973" display="flex" direction="column" align="center" justify="center">
            <Heading data-aos="fade-up" data-aos-anchor-placement="center-bottom" color="white" textAlign="center" fontSize="5xl">Aubrey Approves your Success</Heading>
            <Text data-aos="fade-up" data-aos-anchor-placement="center-bottom"color="white">Be our Reseller and Business Partner</Text>
            <Flex data-aos="fade-up" data-aos-anchor-placement="center-bottom" direction={{base:"column", lg:"row"}}>
                <Image src="/images/aubreyprod.png" alt="allprod"/>
                <Flex direction="column" justify="space-around">
                  <VStack textAlign="start">
                    <Text color="white" >Launch your business sooner</Text>
                    <Text color="white">Resell an extensive range</Text>
                    <Text color="white">Carry no inventory</Text>
                    <Button variant='solid' colorScheme="pink"><Link href="/reseller">Learn More</Link></Button>
                  </VStack>
                </Flex>
            </Flex>
            
      </Flex>
    </Box>
  )
}
