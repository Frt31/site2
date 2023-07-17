<html lang="en">
<head>
<meta charset="utf-8">
<link href='https://fonts.googleapis.com/css?family=Niconne' rel='stylesheet' type='text/css'>
<link href="css.css" rel="stylesheet">
</head>
<body>
<div id="header">
  <h1 style="padding:0;margin:0;">Mr. & Mrs. Rogers</h1>
  Est. 2011
</div>
<div class="parallax" id="trans1">
  <div class="txt right">
    &#10085;Live<br/>
    Laugh<br/>
    Love&#10085;
  </div>
  <div style="clear:both;"></div>
  <div class="txt right sub">
    Every Love Story is Beautiful<br/>
  But Ours is My Favorite
  </div>
</div>
<div class="content">
  <img style="float:right;margin-top:10px;margin-right:15px;" src="http://i1289.photobucket.com/albums/b506/katie_rogers6/447bfe0a6be943789aefab494aeb56d0_zps808779a3.png?t=1397657980" alt="Script R"/></a>
  <h2>Jacob and Katie Rogers</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audeo dicere, inquit. Bonum liberi: misera orbitas. Paria sunt igitur. Frater et T. Duo Reges: constructio interrete. </p>

<p><b>Si longus, levis.</b> Quis istud possit, inquit, negare? <a href='http://loripsum.net/' target='_blank'>Qualem igitur hominem natura inchoavit?</a> Si quae forte-possumus. Erat enim Polemonis. Quid sequatur, quid repugnet, vident. </p>

<p><a href='http://loripsum.net/' target='_blank'>Equidem e Cn.</a> Falli igitur possumus. <b>Immo videri fortasse.</b> Eademne, quae restincta siti? Oratio me istius philosophi non offendit; Quamquam tu hanc copiosiorem etiam soles dicere. </p>

<p><b>Conferam avum tuum Drusum cum C.</b> Praeclare hoc quidem. Verum hoc idem saepe faciamus. Tu vero, inquam, ducas licet, si sequetur; Primum divisit ineleganter; Cave putes quicquam esse verius. </p>

  <div style="clear:both;"></div>
</div>
<div class="parallax" id="trans2">
  <div class="txt left">
    Happiness
  </div>
  <div style="clear:both;"></div>
  <div class="txt left sub">
    Is Being Married to... 
    <br/>Your Best Friend
  </div>
</div>

<div class="content right">
  <img style="float:left;margin-top:10px;margin-left:15px;width:322;height:250;" src="http://i1289.photobucket.com/albums/b506/katie_rogers6/5b0e7348c9c444bd97bb920627430b73_zpsc2f7924d.png?t=1397658857" alt="Mr and Mrs"/></a>
  <h2>Another Content Block</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequens enim est et post oritur, ut dixi. Hoc ipsum elegantius poni meliusque potuit. Quo tandem modo? Sed plane dicit quod intellegit. Tibi hoc incredibile, quod beatissimum. Duo Reges: constructio interrete. Si quicquam extra virtutem habeatur in bonis. Quid enim? </p>
  <p>Comprehensum, quod cognitum non habet? Sint ista Graecorum; Quantum Aristoxeni ingenium consumptum videmus in musicis? Sequitur disserendi ratio cognitioque naturae; </p>
  <div style="clear:both;"></div>
</div>
<div class="parallax" id="trans3">
  <div class="txt left">
    and they lived...
  </div>
  <div style="clear:both;"></div>
  <div class="txt left sub">
    Happily Ever After
  </div>
</div>


body { margin:0;padding:0;font-family:Verdana;}

#header {
  box-sizing:border-box;-moz-box-sizing:border-box;
  z-index:3;
  position:fixed;
  top:0;
  width:100%;
  background:#FD62A9;
  color:#000;
  text-align:center;
  -webkit-box-shadow: 0px 6px 5px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 0px 6px 5px rgba(50, 50, 50, 0.75);
  box-shadow: 0px 6px 5px rgba(50, 50, 50, 0.75);
  border-bottom:3px solid #000;
}

.parallax {
  position:relative;
  z-index:1;
  height:450px;
  -webkit-box-shadow: inset 0px -6px 5px rgba(50, 50, 50, 0.75);
-moz-box-shadow: inset 0px -6px 5px rgba(50, 50, 50, 0.75);
box-shadow: inset 0px -6px 5px rgba(50, 50, 50, 0.75);
}

#trans1 {
  background: url('http://i1289.photobucket.com/albums/b506/katie_rogers6/KatieandJacob-149_zps1a213273.jpg') no-repeat fixed;
  height:575px;
  background-position: center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#trans2 {
  background: url('http://i1289.photobucket.com/albums/b506/katie_rogers6/KatieandJacob-159_zpsb28e3e63.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#trans3 {
  background: url('http://i1289.photobucket.com/albums/b506/katie_rogers6/KatieandJacob-372_zpsb1f5c475.jpg') no-repeat top center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height:550px;
}

.txt {
  font-family: 'Niconne', cursive;
  font-size:55px;
  color:#000;
  width:auto;
  background:#FD62A9;
  background:rgba(255, 102, 153, 0.60);
  padding:5px 10px;
}
.txt.right {
  margin: 150px 100px 0 0;
  float:right;
  text-align:right;
}
.txt.left {
  float:left;
  text-align:left;
  margin: 150px 0 0 100px;
}

.txt.sub {
  font-size:50px;
  line-height:175%;
  font-weight:lighter;
  letter-spacing:1.5px;
  background:#000;
  background:rgba(0,0,0,0.60);
  font-size:25px;
  color:#ccc;
  margin: 0 100px 0 100px;
}
.content {
  box-sizing:border-box;-moz-box-sizing:border-box;
  position:relative;
  z-index:2;
  background:#FFF;
  width:100%;

  margin:0;
  padding:10px 20px;
  -webkit-box-shadow: 0px 6px 5px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 0px 6px 5px rgba(50, 50, 50, 0.75);
  box-shadow: 0px 6px 5px rgba(50, 50, 50, 0.75);
  text-align:left;
}

.content.right {
  text-align:right;
}

.content h2 { padding:0 25px; }
.content p { padding:0 50px; }