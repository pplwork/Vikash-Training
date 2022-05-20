import React from 'react'

const Hoc = (Component) => {

    const color=['red','green','yellow']
    const random=color[Math.floor(Math.random()*3)]
    console.log(random)
    const className = random+'-text';


  return (props)=>{
      return (
          <div className={className}>
            <Component {...props} />
          </div>
      )
  }
}

export default Hoc