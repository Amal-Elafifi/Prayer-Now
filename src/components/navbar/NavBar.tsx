import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { logo } from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {faEarthAmericas} from "@fortawesome/free-solid-svg-icons";



const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-white" >
        <Container className="flex items-center ">
          <Row className='w-full items-center '>
            <Col md={3} className="">
              <Navbar.Brand href="#home" className="flex gap-[10px] items-center">
                <div className="w-10 h-10 ">
                  <img src={logo} alt="parayer now" className="max-w-full"/>
                </div>
                  <p className="font-bold text-base">Prayer Now</p>
              </Navbar.Brand>
            </Col>    
            <Col md={6} className="text-base font-bold">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto active:text-[#dfb82b]">
                    <Nav.Link href="#home" className="text-[#297770] hover:text-[#dfb82b] focus:text-[#dfb82b] active:text-[#dfb82b] active:border-3">Home</Nav.Link>
                    <Nav.Link href="#features" className="text-[#297770] hover:text-[#dfb82b] focus:text-[#dfb82b] active:text-[#dfb82b]">Features</Nav.Link>
                    <Nav.Link href="#about" className="text-[#297770] hover:text-[#dfb82b] focus:text-[#dfb82b] active:text-[#dfb82b]">About</Nav.Link>
                    <Nav.Link href="#prayer times" className="text-[#297770] hover:text-[#dfb82b] focus:text-[#dfb82b] active:text-[#dfb82b]">Prayer Times</Nav.Link>
                    <Nav.Link href="#articles" className="text-[#297770] hover:text-[#dfb82b] focus:text-[#dfb82b] active:text-[#dfb82b]">Articles</Nav.Link>

                      <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#supportCenter" className="text-sm pt-0 hover:bg-white hover:text-[#dfb82b]">
                          <span>Support Center</span>
                          <NavDropdown.Divider />
                        </NavDropdown.Item >
                        <NavDropdown.Item href="#islamicWorld" className="text-sm pt-0 hover:bg-white hover:text-[#dfb82b]">
                          <span className='group-hover:text-yellow'>Islamic World</span>
                          <NavDropdown.Divider />
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#mosques" className="text-sm pt-0 mt-0 hover:bg-white hover:text-[#dfb82b]">
                          <span>Mosques</span>
                          <NavDropdown.Divider />
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#holyQuran" className="text-sm pt-0 hover:bg-white hover:text-[#dfb82b]">
                          <span>Holy Quran</span>
                          <NavDropdown.Divider />
                          </NavDropdown.Item>
                        <NavDropdown.Item href="#learnToPray" className="text-sm pt-0 hover:bg-white hover:text-[#dfb82b]">
                          <span>Learn To Pray</span>
                          <NavDropdown.Divider /> 
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#learnAblution" className=" text-sm pt-0 hover:bg-white hover:text-[#dfb82b]">
                          <span>Learn Ablution</span>
                          <NavDropdown.Divider />
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#faqs" className="text-sm pt-0 hover:bg-white hover:text-[#dfb82b]">
                          <span>FAQ`s</span>
                          <NavDropdown.Divider />
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#downloadPrayerNow" className=" text-sm pt-0 hover:bg-white hover:text-[#dfb82b]">
                          Download Prayer Now
                        </NavDropdown.Item>
                      </NavDropdown>

                  </Nav>
                </Navbar.Collapse>
            </Col>
            <Col md={3}>
                <div className="flex items-center justify-around cursor-pointer ">
                  <div className="bg-[#297770] text-white px-3 py-2 text-xs font-bold rounded-md me-[40px]">
                    Download App
                    <span><FontAwesomeIcon icon={faDownload} /></span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faEarthAmericas} className="text-[#297770] pe-[10px] text-[20px]"/>
                    <span>English</span>
                  </div>
                </div>
            </Col>
        </Row>
        </Container>
      </Navbar>
    </>
  )
}



export default NavBar;
