import { NavLink } from "react-router-dom";

const CurrentEvents = () => {
  return (
    <div className="container">
      <div className="row g-3  my-5">
        <NavLink className=" col-6 col-md-3">
          <img style={{width:"100%"}}
            src="https://i.ibb.co/KsB76cF/holi-card-web-collection-202302270510.png"
            alt="holi" />
          
        </NavLink>
        <NavLink className=" col-6 col-md-3">
          <img style={{width:"100%"}}
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTIwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png"
            alt="holi" />
          
        </NavLink>
        <NavLink className=" col-6 col-md-3">
          <img style={{width:"100%"}}
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/stay-fit-collection-202211140440.png"
            alt="holi" />
          
        </NavLink>
        <NavLink className=" col-6 col-md-3" to='/categories/63fcc48d9ef01e09f8c18325'>
          <img style={{width:"100%"}}
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png"
            alt="holi" />
          
        </NavLink>
       
        
      </div>
    </div>
  );
};
export default CurrentEvents;
