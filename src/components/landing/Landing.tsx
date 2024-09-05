import { Row, Col, Container } from "react-bootstrap";
import { mobileLanding } from "./index";
import styles from "./styles.module.css";
import date from "@utils/date";


const {container, watchwrap, circle} = styles;

const Landing = () => {
    
    return(
        <div className={container}>
          <Container className="relative z-2 ">
            <Row>
              <Col md={{span: 5}}>
                <div className="flex flex-col justify-between gap-[5rem] mt-3">
                    <div className="flex flex-col justify-center ">
                        <h1 className="text-[2rem] capitalize font-bold mt-5 mb-3">prayer now</h1>
                        <p className="capitalize font-[400] text-[2rem] text-[#6f5f4a]">the muslim`s no. 1 companion</p>
                        <div className="capitalize border-2 w-[200px] text-[#6f5f4a] rounded ps-2 py-1 font-bold border-[#483318] mt-2">
                            {date()}
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 items-center cursor-pointer">
                        <button className="bg-[#297770] text-white px-4 py-1.5 rounded capitalize font-bold hover:bg-[#dfb82b]">download</button>
                        <div className={`flex gap-2 hover:text-[#dfb82b] ${watchwrap}`}>
                          <span className={`${circle}`}></span>
                          <p className="text-[#297770] text-[1.5rem]">watch</p>
                        </div>
                    </div>
                </div>
              </Col>
              <Col md={{span: 5, offset: 2}}>
                <img src={mobileLanding}/>
              </Col>
            </Row>
          </Container>
        </div>

    )
}

export default Landing;