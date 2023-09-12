import styled from "styled-components";
import {
  AlternateEmail,
  Facebook,
  Instagram,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.h1`
  display: flex;
`;
const SocialIcon = styled.h1`
  width: 40px;
  color: white;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: " #fcf5f5" })}
`;
const ContactItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  flex: start;
`;
const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Doo_A.</Logo>
        <Desc>
          looking forward to changing the future of E-commerce by building
          Bridges that would change the world forever but i can't do it alone.
          Together we can. What made the JavaScript developer so sad? He did not
          Node how to Express himself.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Samsung Phones</ListItem>
          <ListItem>Iphone</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Sonapur 21 plot number 264-1112 Dubai, UAE
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +971567038842
        </ContactItem>
        <ContactItem>
          <AlternateEmail style={{ marginRight: "10px" }} />
          doochukbeni@gmail.com
        </ContactItem>
        <Payment src="./payment-method-png-26073.png" />
      </Right>
    </Container>
  );
};

export default Footer;
