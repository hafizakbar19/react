import React, { useState } from 'react'

const InlineStyling = () => {
    const [userCard, setUserCard] =useState({
        border: '2px solid gray',
            width: '200px',
            textAlign: 'center',
            borderRadius: '10px',
            margin: '15px',
            padding: '10px'
    })

    const [grid,setGrid] = useState(true);
    const setTheme = (bgColor,textColor,borderColor) => {
        setUserCard({...userCard,backgroundColor:bgColor,color:textColor,borderColor:borderColor});
    }

  return (
    <>
        <h1>Inline styling</h1>
        <button onClick={()=>setTheme("red","white","black")}>Red theme</button>
        <button onClick={()=>setTheme("","","gray")}>default theme</button>
        <button onClick={()=>setGrid(!grid)}>{grid?"List view":"Grid view"}</button>
        <div style={{
            display: grid ? 'flex' : 'block',
            flexWrap: 'wrap'
        }}>
        <div style={userCard}>
            <img style={{
                width: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px'
            }} src='https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D' alt='user image'/>
            <h2>Sajid Ali</h2>
            <h4>Web developer</h4>
        </div>
        <div style={userCard}>
            <img style={{
                width: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px'
            }} src='https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D' alt='user image'/>
            <h2>Sajid Ali</h2>
            <h4>Web developer</h4>
        </div>
        <div style={userCard}>
            <img style={{
                width: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px'
            }} src='https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D' alt='user image'/>
            <h2>Sajid Ali</h2>
            <h4>Web developer</h4>
        </div>
        <div style={userCard}>
            <img style={{
                width: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px'
            }} src='https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D' alt='user image'/>
            <h2>Sajid Ali</h2>
            <h4>Web developer</h4>
        </div>
        <div style={userCard}>
            <img style={{
                width: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px'
            }} src='https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D' alt='user image'/>
            <h2>Sajid Ali</h2>
            <h4>Web developer</h4>
        </div>
        <div style={userCard}>
            <img style={{
                width: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px'
            }} src='https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D' alt='user image'/>
            <h2>Sajid Ali</h2>
            <h4>Web developer</h4>
        </div>
        <div style={userCard}>
            <img style={{
                width: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px'
            }} src='https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D' alt='user image'/>
            <h2>Sajid Ali</h2>
            <h4>Web developer</h4>
        </div>
        <div style={userCard}>
            <img style={{
                width: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px'
            }} src='https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D' alt='user image'/>
            <h2>Sajid Ali</h2>
            <h4>Web developer</h4>
        </div>
        <div style={userCard}>
            <img style={{
                width: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px'
            }} src='https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D' alt='user image'/>
            <h2>Sajid Ali</h2>
            <h4>Web developer</h4>
        </div>
        <div style={userCard}>
            <img style={{
                width: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px'
            }} src='https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D' alt='user image'/>
            <h2>Sajid Ali</h2>
            <h4>Web developer</h4>
        </div>
        <div style={userCard}>
            <img style={{
                width: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px'
            }} src='https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D' alt='user image'/>
            <h2>Sajid Ali</h2>
            <h4>Web developer</h4>
        </div>
        <div style={userCard}>
            <img style={{
                width: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px'
            }} src='https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D' alt='user image'/>
            <h2>Sajid Ali</h2>
            <h4>Web developer</h4>
        </div>
        </div>
    </>
  )
}

export default InlineStyling