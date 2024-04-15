/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useState} from 'react'
import {toAbsoluteUrl, KTSVG} from '../../../helpers'
import BookmarkIcon from '@mui/icons-material/Bookmark';


const Card3 = ({
  color = '',
  avatar = '',
  online = false,
  name,
  job,
  totalExperience,
  totalClasses,
  Fun,
  id,
  FunBookNow
}) => {

  const [BookmarkClick,setBookMarkClick] = useState(false);

  const handelBookmarkClick = ()=>{
    setBookMarkClick(!BookmarkClick)
  }
  return (
    <div className='card' style={{borderRadius:'30px'}}>
      <div className='p-2' style={{textAlign:"right"}}>
      <BookmarkIcon onClick={handelBookmarkClick} style={{fontSize:"24px",color:`${BookmarkClick ? "#EA6C13" :"#EA6C13"}`,cursor:"pointer"}} />
      </div>
      <div className='card-body d-flex flex-center flex-column p-9'>
        <div className='mb-5'>
          <div className='symbol symbol-75px symbol-circle'>
            {color ? (
              <span className={`symbol-label bg-light-${color} text-${color} fs-5 fw-bolder`}>
                {name.charAt(0)}
              </span>
            ) : (
              <img alt='Pic' src={toAbsoluteUrl(avatar)} />
            )}
            {online && (
              <div className='symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3'></div>
            )}
            {!online && (
              <div className='symbol-badge bg-danger start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3'></div>
            )}
          </div>
         
        </div>

        <a href='#' className='fs-4   fw-bolder mb-0' style={{color:'#EA6C13'}}>
          {name}
        </a>
        <p style={{fontFamily:'Degular Demo',color:'#3E5072'}}>meet Akshay,a passionate yoga teacher dedicated to guiding students on their journey to wellness and self-discovery.<br/>

With years of experience and a nurturing approach, Akshay creates a supportive environment where students can explore the transformative power of yoga.<br/>

join him for classes that inspire, empower, and uplift.</p>
        {/* <div style={{textAlign:"center",color:"grey",letterSpacing:1,marginBottom:"20px"}}>{job.slice(0,20)}...</div> */}

        <div className='d-flex flex-center flex-wrap mb-5'>
          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3'>
            <div className='fs-6 fw-bolder text-gray-700'>{totalExperience}</div>
            <div className='fw-bold text-gray-400'>Total Experience</div>
          </div>

          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3'>
            <div className='fs-6 fw-bolder text-gray-700'>{totalClasses}</div>
            <div className='fw-bold text-gray-400'>Total Classes</div>
          </div>
        </div>

<div className='d-flex flex-center flex-wrap mb-5'>
<a onClick={()=>FunBookNow(id)} className='btn btn-sm  mr-10' style={{marginRight:20,backgroundColor:'#EA6C13',color:'white'}}>
          
          Book Class
          {/* <KTSVG path='/media/icons/duotune/arrows/arr075.svg'  className='svg-icon-3 mt-5' /> */}
        </a>
        <a  onClick={()=>{Fun(id)}} className='btn btn-sm ' style={{backgroundColor:'#EA6C13',color:'white'}} >
          
          View Profile
          {/* <KTSVG path='/media/icons/duotune/arrows/arr075.svg'  className='svg-icon-3 mt-5' /> */}
        </a>
</div>
       
      </div>
    </div>
  )
}

export {Card3}
