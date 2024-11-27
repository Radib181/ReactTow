import React from 'react'
import { Button, link, Link, Navbar, NavbarBrand , NavbarContent, NavbarItem } from '@nextui-org/react'
import Logo from "../Phots/logo.png"

function NavberArea() {
  return (

   <section className='' >
   <Navbar shouldHideOnScroll isBlurred = {false} className='bg-[#291F35]/25 sticky top-0  w-full shadow-lg' maxWidth='xl'>
    <NavbarBrand>
      <div className='w-26'>
         <img className='cursor-pointer ' src={Logo} alt="" />
      </div>
      
    </NavbarBrand>

    <NavbarContent justify='end'>

      <NavbarItem>
        <Button  className ="border border-[#772AB3] text-[#772AB3]"  color="#772AB3" variant='bordered' radius='full' > 
        Contact 
        </Button>
      </NavbarItem>
   

    </NavbarContent>
   </Navbar>
   </section>
  )
}

export default NavberArea