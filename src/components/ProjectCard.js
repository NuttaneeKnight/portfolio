import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=''/>
        <div className="proj-txtx">
          <h5>{title}</h5>
         <a href={description}><span><h4>{description}</h4></span></a>
        </div>
      </div>
    </Col>
  )
}