import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Home = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <div className='collectionTopic'>
        {
          props.arr.map((item) => {
            return (
              <div className='topic' onClick={() => { navigate(`/${item.title}`) }}>{item.title}</div>
            )
          })

        }
      </div>
    </>
  )
}
