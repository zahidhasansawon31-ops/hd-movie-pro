const adsContainer = document.getElementById("adsContainer");

const ads = [
  `<script type="text/javascript">
     atOptions = {'key':'9e28dcbe124741a8155c4787658406ba','format':'iframe','height':250,'width':300,'params':{}};
   </script><script type="text/javascript" src="//www.highperformanceformat.com/9e28dcbe124741a8155c4787658406ba/invoke.js"></script>`,

  `<script type="text/javascript">
     atOptions = {'key':'9d8f98b9964a48e98fc2bdfd7e93c974','format':'iframe','height':90,'width':728,'params':{}};
   </script><script type="text/javascript" src="//www.highperformanceformat.com/9d8f98b9964a48e98fc2bdfd7e93c974/invoke.js"></script>`,

  `<script type='text/javascript' src='//pl27589035.revenuecpmgate.com/5e/27/1f/5e271f3661b742c3945dac16f338858b.js'></script>`,

  `<script type='text/javascript' src='//pl27589049.revenuecpmgate.com/31/61/27/3161278de79cea651baad329445e5431.js'></script>`,

  `<script async="async" data-cfasync="false" src="//pl27578885.revenuecpmgate.com/dfb97c096f6be7d0435d38955d2abbde/invoke.js"></script>
   <div id="container-dfb97c096f6be7d0435d38955d2abbde"></div>`
];

ads.forEach(a => {
  const div = document.createElement("div");
  div.className = "ads";
  div.innerHTML = a;
  adsContainer.appendChild(div);
});