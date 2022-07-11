import React from "react";
import { Container, Row, Col, Table,Image } from "react-bootstrap";
import {FiPhoneCall} from 'react-icons/fi'
import {ImMobile2} from 'react-icons/im'
import {HiOutlineMail} from 'react-icons/hi'
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Muscat Pizza Shop</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
              dolores. Nam suscipit repellat esse velit aspernatur sequi
              eligendi minus neque quos distinctio. Nulla alias dolorem possimus
              corporis, sunt molestiae praesentium perspiciatis error enim
              exercitationem ullam saepe iure incidunt non vel, voluptatibus hic
              voluptatem. Asperiores facilis laudantium provident, atque
              repudiandae, sed esse iste maiores adipisci a obcaecati blanditiis
              consequuntur nam sequi? Explicabo, corrupti quos ipsum sunt
              officia delectus consectetur dicta ad fugiat impedit veritatis,
              mollitia blanditiis nihil reiciendis possimus voluptates itaque
              perferendis totam dolore rem inventore commodi in! Nostrum saepe
              libero quaerat sit accusantium ipsam consequatur quos, beatae sed
              fugit, ducimus nam molestias placeat culpa nulla animi numquam,
              deleniti sint quisquam eligendi. Molestiae quaerat ex mollitia
              nihil aut qui ad iste recusandae neque dolores deleniti explicabo
              dolore quidem corrupti dignissimos tempore, porro veritatis
              temporibus quibusdam. Fugit saepe accusantium officia doloremque
              quidem laudantium nesciunt perspiciatis! Fugit perspiciatis ipsum
              officia eligendi distinctio at autem dicta. Fugit eos omnis alias
              perspiciatis voluptatum beatae asperiores. Nam quo cumque ipsam
              neque blanditiis optio, molestias, voluptatibus voluptatem itaque,
              illo esse! Dolorum sunt officiis soluta optio repellendus totam
              unde ipsam, nihil sequi ad ratione, similique laboriosam quasi,
              sed voluptates deserunt? Eveniet incidunt, aliquam corrupti culpa
              saepe id assumenda.
            </p>

            <Table striped bordered hover size="sm" className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={6}>Contact Details</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall/>
                  </td>
                  <td>Call</td>
                  <td>+968 22250545</td>
                  
                </tr>
                <tr>
                  <td>
                    <ImMobile2/>
                  </td>
                  <td>Mobile</td>
                  <td>+968 98277502</td>
                  
                </tr>
                <tr>
                  <td>
                    <HiOutlineMail/>
                  </td>
                  <td>Email</td>
                  <td>musactpizza@gmail.com</td>
                  
                </tr>   
                
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image src='images/farmhouse.jpg' style={{width:'100%', height:'50%'}}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
