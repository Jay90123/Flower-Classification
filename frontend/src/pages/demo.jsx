import { BorderAllOutlined } from "@material-ui/icons"

const h1 = {
    font: 'arial',
    color: '#8EB533',
    marginLeft: '130px',
}
const h2 = {
    font: 'arial',
    color: "gray",
    marginLeft: '130px'
}
const img2 = {
    width: '300px',
    height: '200px'
}
const cover1 = {
    width: '1280px',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)'
}
const box1 = {
    width: '300px',
    height: '300px',
    margin: '10px',
    font: 'arial',
    color: 'gray',
    boxShadow: '-1px 0 10px #8EB533'
}
const body1 = {
    justifyContent: 'center',
    // alignItems: 'center',
    display: 'flex',
}
const wrapper1 = {
}
const WorldFLora = (props) => {
    return <div class="wrapper" style={wrapper1}>
        <h1 style={h1}>
        Useful plants
        </h1>

        <h2 style={h2}>
            Here are some common examples of Useful plants
        </h2>
        <body style={body1}>


            <div class="cover" style={cover1}>


            </div>
        </body>
    </div>


}

export default WorldFLora;