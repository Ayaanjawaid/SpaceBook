import "./rightbar.css"
function Rightbar(){
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="gift.jpg" alt="bithday" />
                    <span className="birthdayText"><b>Rohan</b> and <b>2 other Friends</b> have a birthday today</span>
                </div>
                <img className="rightbarAd" src="ad.jpg" alt=""/>
                
                <hr></hr>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="friendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="friend1.jpg" alt="img" className="rightbarprofileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Ritesh Kumar</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="friend3.jpg" alt="img" className="rightbarprofileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Sunny chowdhry</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="friend6.jpg" alt="img" className="rightbarprofileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Subhadeep Dolui</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="friend2.jpg" alt="img" className="rightbarprofileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Anna Tigga</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="friend7.jpg" alt="img" className="rightbarprofileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Anamika Das</span>
                    </li>
                </ul>
                <hr></hr>
                <h4 className="rightbarTitle">Play Now!🎮</h4>
                <img className="rightbarAd1" src="game1.jpg" alt=""/>
                
                <img className="rightbarAd1" src="game2.jpg" alt=""/>
                <img className="rightbarAd1" src="game3.jpg" alt=""/>
                <img className="rightbarAd1" src="game4.jpg" alt=""/>
                <hr></hr>
                <h4 className="rightbarTitle">Videos📺</h4>
                <video controls className="rightbarVideoAd" src="KFC.mp4" alt=""></video>
                <video controls className="rightbarVideoAd" src="DOMINOS.mp4" alt=""></video>
                <video controls className="rightbarVideoAd" src="AXE.mp4" alt=""></video>
                <video controls className="rightbarVideoAd" src="KITKAT.mp4" alt=""></video>
                <video controls className="rightbarVideoAd" src="OREO.mp4" alt=""></video>
            </div>
        </div>
    );
}
export default Rightbar;
