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
const txt = {
    color: '#8EB533',
    fontSize: '25px',
}
const body1 = {
    justifyContent: 'center',
    // alignItems: 'center',
    display: 'flex',
}
const wrapper1 = {
}
const Flower = (props) => {
    return <div class="wrapper" style={wrapper1}>
        <h1 style={h1}>
            Useful flower
        </h1>

        <h2 style={h2}>
            Here are some common examples of Useful flower
        </h2>
        <body style={body1}>


            <div class="cover" style={cover1}>

                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/4854d3c91560eb379a90fdf2fb9a7752ea9fb6b5" /><a href='https://identify.plantnet.org/gbb-fd/species/Abutilon%20spp./data ' target="_blank" style={txt}>Abutilon spp.</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/978e3d2fbd44267ae35dc3cea6c01b89e319ee1c" /><a href='https://identify.plantnet.org/gbb-fd/species/Acanthus%20mollis%20L./data ' target="_blank" style={txt}>Acanthus mollis</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/32db9587394ab16a69301d7fdb1fb1a85c078d91" /><a href='https://identify.plantnet.org/gbb-fd/species/Adenanthos%20sericeus%20Labill./data ' target="_blank" style={txt}>Adenanthos sericeus</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/0fde184bc3094a0f0c2fde553859774ad18af3fc" /><a href='https://identify.plantnet.org/gbb-fd/species/Adenium%20obesum%20(Forssk.)%20Roem.%20%26%20Schult./data ' target="_blank" style={txt}>Adenium obesum</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/f25ccfcbc969b59de46adedfaf1172e82de8b9e0" /><a href='https://identify.plantnet.org/gbb-fd/species/Aeonium%20tabuliforme%20(Haw.)%20Webb%20%26%20Berthel./data ' target="_blank" style={txt}>Aeonium tabuliforme</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/32364c38e0c2129fcfb3e9086e677676141be57d" /><a href='https://identify.plantnet.org/gbb-fd/species/Agapanthus%20spp./data ' target="_blank" style={txt}>Agapanthus spp.</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/b18f1bdfb9a9269045845a8e978dadbe5457e271" /><a href='https://identify.plantnet.org/gbb-fd/species/Agave%20guiengola%20Gentry/data ' target="_blank" style={txt}>Agave guiengola</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/490685bacf9ec8f1f9efb9060789189929949b7c" /><a href='https://identify.plantnet.org/gbb-fd/species/Agave%20spp./data ' target="_blank" style={txt}>Agave spp.</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/dac200a6db36b49243dc0c41fd91ce8016c47f82" /><a href='https://identify.plantnet.org/gbb-fd/species/Agave%20victoriae-reginae%20T.Moore/data ' target="_blank" style={txt}>Agave victoriae-reginae</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/c79f9b1225ffe57e70b5e77740297180af852e20" /><a href='https://identify.plantnet.org/gbb-fd/species/Aloe%20polyphylla%20Pillans/data ' target="_blank" style={txt}>Aloe polyphylla</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/5a6a52adee8a791075db30e38728788644421fb7" /><a href='https://identify.plantnet.org/gbb-fd/species/Aloidendron%20barberae%20(T.-Dyer)%20Klopper%20%26%20Gideon%20F.%20Sm./data ' target="_blank" style={txt}>Aloidendron barberae</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/6dc0ad9ef4ffdcf21735575417254bd58ac14558" /><a href='https://identify.plantnet.org/gbb-fd/species/Aloidendron%20dichotomum%20(Masson)%20Klopper%20%26%20Gideon%20F.%20Sm./data ' target="_blank" style={txt}>Aloidendron dichotomum</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/9fc1e7469eafca87a062cc26d519f32f6b8e72b2" /><a href='https://identify.plantnet.org/gbb-fd/species/Alstroemeria%20spp./data ' target="_blank" style={txt}>Alstroemeria spp.</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/c598e587fb7896a95e065c1e1203bb63312da317" /><a href='https://identify.plantnet.org/gbb-fd/species/Anigozanthos%20flavidus%20DC./data ' target="_blank" style={txt}>Anigozanthos flavidus</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/009c239876f82cf134fe7c14e0d962dbbd58b25b" /><a href='https://identify.plantnet.org/gbb-fd/species/Anigozanthos%20spp./data ' target="_blank" style={txt}>Anigozanthos spp.</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/f90bd5cf99a0007c3ab8999985a1cf0e36d7fa38" /><a href='https://identify.plantnet.org/gbb-fd/species/Argyranthemum%20frutescens%20(L.)%20Sch.Bip./data ' target="_blank" style={txt}>Argyranthemum frutescens</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/4646fbcea54bca0bafd905ee82a6ac2bbda486cd" /><a href='https://identify.plantnet.org/gbb-fd/species/Aristaloe%20aristata%20cv.%20Cosmo/data ' target="_blank" style={txt}>Aristaloe aristata cv. 'Cosmo'</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/c9d30a2bad9c60ed4313ecb9d1e572a7e378bc58" /><a href='https://identify.plantnet.org/gbb-fd/species/Artemisia%20spp./data ' target="_blank" style={txt}>Artemisia spp.</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/341ce84e4615faa78144f5d06bcf055dcc971e5a" /><a href='https://identify.plantnet.org/gbb-fd/species/Aster%20amellus%20L./data ' target="_blank" style={txt}>Aster amellus</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/cfb264419476835ead465007f901482adf32efea" /><a href='https://identify.plantnet.org/gbb-fd/species/Beta%20vulgaris%20L./data ' target="_blank" style={txt}>Beta vulgaris</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/4f33a1c95ae8c7f289b78e257cdc09db980b9fcc" /><a href='https://identify.plantnet.org/gbb-fd/species/Bombax%20ceiba%20L./data ' target="_blank" style={txt}>Bombax ceiba</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/db54454eab645a62e5012eeb71f2c7cd92ecc3fa" /><a href='https://identify.plantnet.org/gbb-fd/species/Callistemon%20viminalis%20(Sol.%20ex%20Gaertn.)%20G.Don/data ' target="_blank" style={txt}>Callistemon viminalis</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/4dd4366dd9d08b9f0c6bab6e27c1a2a9e7f984c6" /><a href='https://identify.plantnet.org/gbb-fd/species/Camellia%20japonica%20L./data ' target="_blank" style={txt}>Camellia japonica</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/3771fa67b70a3931222feb636ca037728e463f4a" /><a href='https://identify.plantnet.org/gbb-fd/species/Citrus%20aurantium%20L./data ' target="_blank" style={txt}>Citrus aurantium</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/bb41d65792226fe2c949d7a28dd40670261f11ac" /><a href='https://identify.plantnet.org/gbb-fd/species/Clivia%20miniata%20(Lindl.)%20Bosse/data ' target="_blank" style={txt}>Clivia miniata</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/63f771dc283f3da1a753315ffa3bbdfd22e3cb51" /><a href='https://identify.plantnet.org/gbb-fd/species/Cupressus%20sempervirens%20cv.%20Swane%E2%80%99s%20Gold/data ' target="_blank" style={txt}>Cupressus sempervirens cv. 'Swane’s Gold'</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/517961e9f92a9e7592c8044463750ef364d4e41b" /><a href='https://identify.plantnet.org/gbb-fd/species/Curio%20talinoides%20(DC.)%20P.V.Heath/data ' target="_blank" style={txt}>Curio talinoides</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/93001f9823a1f468b7514795b85aa097dac3ae3f" /><a href='https://identify.plantnet.org/gbb-fd/species/Cyclamen%20spp./data ' target="_blank" style={txt}>Cyclamen spp.</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/a32bdc973f944d36f71364c787e5f40c653dbf87" /><a href='https://identify.plantnet.org/gbb-fd/species/Cyphostemma%20juttae%20(Dinter%20%26%20Gilg)%20Desc./data ' target="_blank" style={txt}>Cyphostemma juttae</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/23c694e282df7fee7ac74fdd3771cab189312012" /><a href='https://identify.plantnet.org/gbb-fd/species/Dahlia%20imperialis%20Roezl%20ex%20Ortgies/data ' target="_blank" style={txt}>Dahlia imperialis</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/b6a7c974e080a58a4c0de0032853530e68238a0b" /><a href='https://identify.plantnet.org/gbb-fd/species/Dahlia%20spp./data ' target="_blank" style={txt}>Dahlia spp.</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/1d2369b8e30c1dc449943187a6f491c91f1ca565" /><a href='https://identify.plantnet.org/gbb-fd/species/Delosperma%20echinatum%20(Lam.)%20Schwantes/data ' target="_blank" style={txt}>Delosperma echinatum</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/3cdf1abf4be23a131a939dc985661ba702372c6b" /><a href='https://identify.plantnet.org/gbb-fd/species/Delphinium%20spp./data ' target="_blank" style={txt}>Delphinium spp.</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/e3d0a5ae682eac0c1c2bbf80e61c85bd2320f2f8" /><a href='https://identify.plantnet.org/gbb-fd/species/Dianthus%20spp./data ' target="_blank" style={txt}>Dianthus spp.</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/125854a86748dfc38a826f94281fadc754543e69" /><a href='https://identify.plantnet.org/gbb-fd/species/Digitalis%20purpurea%20L./data ' target="_blank" style={txt}>Digitalis purpurea</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/2fb2c925704634e8b9707ee268b4f088ef5d235c" /><a href='https://identify.plantnet.org/gbb-fd/species/Disphyllum%20cv.%20Sunburn/data ' target="_blank" style={txt}>Disphyllum cv. 'Sunburn'</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/737b3119824e8f8e17f96e16cbddadea9971e3c2" /><a href='https://identify.plantnet.org/gbb-fd/species/Dracaena%20draco%20(L.)%20L./data ' target="_blank" style={txt}>Dracaena draco</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/171a631380b536397de288622c86b98a3209f254" /><a href='https://identify.plantnet.org/gbb-fd/species/Echeveria%20cv.%20Apus/data ' target="_blank" style={txt}>Echeveria cv. 'Apus'</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/f2cd7688211537db30c928344901e3aff21419aa" /><a href='https://identify.plantnet.org/gbb-fd/species/Echeveria%20spp./data ' target="_blank" style={txt}>Echeveria spp.</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/7e752e20f43c267ce1683cdabca8be731f4da7d9" /><a href='https://identify.plantnet.org/gbb-fd/species/Encephalartos%20horridus%20(Jacq.)%20Lehm./data ' target="_blank" style={txt}>Encephalartos horridus</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/3dd4b6cd1ff627c017c688f41d79cd4bd2532de5" /><a href='https://identify.plantnet.org/gbb-fd/species/Encephalartos%20lehmannii%20Lehm./data ' target="_blank" style={txt}>Encephalartos lehmannii</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/163ac28dc1535e1da95fc7984b24e28e76e9a0d8" /><a href='https://identify.plantnet.org/gbb-fd/species/Eremophila%20nivea%20Chinnock/data ' target="_blank" style={txt}>Eremophila nivea</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/f216c7f37b49ca1c400a3d6e78e98b05c98c3f6d" /><a href='https://identify.plantnet.org/gbb-fd/species/Erica%20verticillata%20P.J.Bergius/data ' target="_blank" style={txt}>Erica verticillata</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/09c95de2be4ff850ff6cb7c149efa44e5696035f" /><a href='https://identify.plantnet.org/gbb-fd/species/Eriocapitella%20hupehensis%20(Lemoine)%20Christenh.%20%26%20Byng/data ' target="_blank" style={txt}>Eriocapitella hupehensis</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/e03b82782c3ad2d8834974a55771226d42c1d0d3" /><a href='https://identify.plantnet.org/gbb-fd/species/Espostoa%20guentheri%20(Kupper)%20Buxb./data ' target="_blank" style={txt}>Espostoa guentheri</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/98896e2c11197d3b43b489548b4ac2775c965948" /><a href='https://identify.plantnet.org/gbb-fd/species/Euphorbia%20flanaganii%20N.E.Br./data ' target="_blank" style={txt}>Euphorbia flanaganii</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/209a5e1e2ee5642c7c19e1e2d2acdfd61daa557b" /><a href='https://identify.plantnet.org/gbb-fd/species/Euryops%20pectinatus%20(L.)%20Cass./data ' target="_blank" style={txt}>Euryops pectinatus</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/1064cc6b5522012dba3c95f6647d1e9d21119bab" /><a href='https://identify.plantnet.org/gbb-fd/species/Fatsia%20japonica%20(Thunb.)%20Decne.%20%26%20Planch./data ' target="_blank" style={txt}>Fatsia japonica</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/8c667e13c22fd6afc2fb7a9994bf799d871f50f6" /><a href='https://identify.plantnet.org/gbb-fd/species/Faucaria%20tigrina%20(Haw.)%20Schwantes/data ' target="_blank" style={txt}>Faucaria tigrina</a></div>
                <div class="box" style={box1} ><img style={img2} src="https://bs.plantnet.org/image/s/879e91d0bcfc9ebe31f5e9e01499b8b003f50e40" /><a href='https://identify.plantnet.org/gbb-fd/species/Ferocactus%20herrerae%20J.G.Ortega/data ' target="_blank" style={txt}>Ferocactus herrerae</a></div>



            </div>
        </body>
    </div>


}

export default Flower;