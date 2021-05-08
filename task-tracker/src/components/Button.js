import propTypes from 'prop-types'

const Button = ({color, text}) => {
    const onClick=()=>{
        console.log('clicked')
    }

    return <button onClick={onClick} style={{backgroundColor:color}} className='btn'>{text}</button>
        
}

Button.defautProps={
    color:'steelblue'
}

Button.propTypes={
    text:propTypes.string,
    color:propTypes.string,
}

export default Button
