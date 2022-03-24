import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="top">Fuck You Harrison Ford!</div>
                <div className="middle">I really miss your movies :(</div>
                <div className="bottom">Man I'm Bored</div>   
            </div>
            
            <div className="right">
            <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
        </div>
    )
}