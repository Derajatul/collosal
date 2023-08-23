type Eclipse = {
  bg: string,
  top: string,
  left: string,
  width: string,
  height: string,
}

const Eclipse = ({bg, top, left, width, height}: Eclipse) => {
  const eclipseClass = `eclipse ${bg} ${width} ${height} ${left} ${top}`
  return(
    <div className={eclipseClass}>
    </div>
  )
}
export default Eclipse