import './Mywork.css'
import u1 from '../assets/theme_pattern.svg'
import mywork_data from '../assets/mywork_data'
import arrow_icon from '../assets/arrow_icon.svg'
const Mywork = () => {
  return (
      <div className='mywork' id='work'>  
          <div className="mywork-title">
              <h1>My latest work</h1>
              <img src={u1} alt="" />
          </div>
          <br />
          <div className="mywork-container">
              {mywork_data.map((work, index) => {
                  return <img key={ index} src={work.w_img} alt="" loading="lazy"/>
              })}
          </div>
          <div className="mywork-showmore">
              <p>Show more</p>
              <img src={arrow_icon} alt="" />
         </div>
    </div>
  )
}

export default Mywork
