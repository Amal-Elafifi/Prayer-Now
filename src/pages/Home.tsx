import Landing from "@components/landing/Landing";
import NavBar from "@components/navbar/NavBar";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
        <NavBar/>
        <Landing/>
        Home
    </Container>
  )
}

export default Home;